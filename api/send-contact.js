// Envoi du formulaire de contact par email, directement depuis le site (sans
// dépendre de l'application mail du visiteur). Configuration via variables
// d'environnement Vercel uniquement — jamais de secret dans ce fichier ni le
// dépôt. Tant que ces variables ne sont pas définies, renvoie une erreur
// explicite (jamais un succès silencieux) et le visiteur voit un message
// clair côté site.
const nodemailer = require("nodemailer");

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

const FIELD_LABELS = {
  name: "Nom",
  email: "Email",
  phone: "Téléphone",
  address: "Adresse",
  birthdate: "Date de naissance prévue du bébé",
  babies: "Nombre de bébés",
  needs: "Besoins"
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  // Piège à robots : un champ caché que seul un bot remplit. Un humain ne le
  // voit jamais, donc ne le remplit jamais.
  if ((body._hp || "").toString().trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const needs = (body.needs || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const address = (body.address || "").toString().trim();
  const birthdate = (body.birthdate || "").toString().trim();
  const babies = (body.babies || "").toString().trim();

  if (!name || !email || !needs) {
    return res.status(400).json({ ok: false, error: "missing_fields" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  const host = process.env.CONTACT_SMTP_HOST;
  const port = process.env.CONTACT_SMTP_PORT;
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const recipient = process.env.CONTACT_RECIPIENT || "contact@cocoonurse.ch";

  if (!host || !port || !user || !pass) {
    console.error("send-contact: configuration SMTP manquante (CONTACT_SMTP_HOST/PORT/USER/PASS non definies)");
    return res.status(500).json({ ok: false, error: "not_configured" });
  }

  const fields = [
    ["name", name], ["email", email], ["phone", phone], ["address", address],
    ["birthdate", birthdate], ["babies", babies], ["needs", needs]
  ];
  const textLines = [];
  const htmlRows = [];
  fields.forEach(function (pair) {
    if (!pair[1]) return;
    textLines.push(FIELD_LABELS[pair[0]] + " : " + pair[1]);
    htmlRows.push(
      '<tr><td style="padding:4px 10px;font-weight:600;white-space:nowrap;">' + escapeHtml(FIELD_LABELS[pair[0]]) +
      '</td><td style="padding:4px 10px;">' + escapeHtml(pair[1]) + "</td></tr>"
    );
  });

  try {
    // Deux options documentées par Infomaniak : 465 en TLS implicite dès la
    // connexion, ou 587 avec une mise à niveau STARTTLS obligatoire (jamais de
    // repli silencieux en clair si le serveur ne l'annonce pas). La config
    // suit exactement le port choisi, jamais l'inverse.
    const isImplicitTls = Number(port) === 465;
    const transporter = nodemailer.createTransport({
      host: host,
      port: Number(port),
      secure: isImplicitTls,
      requireTLS: !isImplicitTls,
      auth: { user: user, pass: pass }
    });

    await transporter.sendMail({
      from: '"Cocoonurse.ch" <' + user + ">",
      to: recipient,
      replyTo: email,
      subject: "Nouvelle demande via Cocoonurse.ch — " + name,
      text: textLines.join("\n"),
      html: "<table cellpadding=\"0\" cellspacing=\"0\">" + htmlRows.join("") + "</table>"
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-contact: echec de l'envoi", err && err.message);
    return res.status(502).json({ ok: false, error: "send_failed" });
  }
};
