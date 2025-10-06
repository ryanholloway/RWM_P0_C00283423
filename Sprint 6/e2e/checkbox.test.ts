import { test, expect } from '@playwright/test';

test('ChecklistItem checkbox toggles and increments counter', async ({ page }) => {
	await page.goto('/lab/checklist');

	const checkbox = page.locator('input[type="checkbox"]');
	await expect(checkbox).not.toBeChecked();

	const counter = page.locator('text=Checked Items: 0');
	await expect(counter).toBeVisible();

	await checkbox.click();
	await expect(checkbox).toBeChecked();

	const updatedCounter = page.locator('text=Checked Items: 1');
	await expect(updatedCounter).toBeVisible();
});
