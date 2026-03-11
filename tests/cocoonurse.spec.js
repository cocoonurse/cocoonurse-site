const { test, expect } = require('@playwright/test');

test.describe('Desktop Chrome', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page loads and title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Cocoonurse/);
  });

  test('hero section visible with image', async ({ page }) => {
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
  });

  test('navigation links present', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('a[href="#about"]').first()).toBeVisible();
    await expect(page.locator('a[href="#services"]').first()).toBeVisible();
    await expect(page.locator('a[href="#contact"]').first()).toBeVisible();
  });

  test('services section visible', async ({ page }) => {
    await expect(page.locator('#services')).toBeVisible();
  });

  test('gallery section has 9 images', async ({ page }) => {
    await page.locator('.masonry-grid').scrollIntoViewIfNeeded();
    await expect(page.locator('.masonry-item')).toHaveCount(9);
  });

  test('contact section has logo', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact-logo-img')).toBeVisible();
  });
});

test.describe('Mobile Portrait', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('hamburger button visible', async ({ page }) => {
    await expect(page.locator('#menu-btn')).toBeVisible();
  });

  test('hamburger opens mobile menu', async ({ page }) => {
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeHidden();
    await page.locator('#menu-btn').click();
    await expect(menu).toBeVisible();
  });

  test('gallery has 9 items', async ({ page }) => {
    await page.locator('.masonry-grid').scrollIntoViewIfNeeded();
    await expect(page.locator('.masonry-item')).toHaveCount(9);
  });

  test('contact logo visible', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact-logo-img')).toBeVisible();
  });
});

test.describe('Mobile Landscape', () => {
  test.use({ viewport: { width: 844, height: 390 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('hamburger opens in landscape', async ({ page }) => {
    const menu = page.locator('#mobile-menu');
    await page.locator('#menu-btn').click();
    await expect(menu).toBeVisible();
  });

  test('gallery has 9 items in landscape', async ({ page }) => {
    await page.locator('.masonry-grid').scrollIntoViewIfNeeded();
    await expect(page.locator('.masonry-item')).toHaveCount(9);
  });

  test('contact logo visible in landscape', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact-logo-img')).toBeVisible();
  });
});
