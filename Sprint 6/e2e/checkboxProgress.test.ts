import { test, expect } from '@playwright/test';

test('ChecklistProgress shows gated progress only after submit', async ({ page }) => {
	await page.goto('/lab/checklist/progress');

	const progressLabel = page.locator('text=Progress:');

	await expect(progressLabel).toHaveText('Progress: 0/5 (0%)');

	const checkboxes = page.locator('input[type="checkbox"]');

	await expect(checkboxes).toHaveCount(5);
	for (let i = 0; i < 5; i++) {
		await expect(checkboxes.nth(i)).not.toBeChecked();
	}

	await checkboxes.nth(0).click();
	await checkboxes.nth(1).click();

	await expect(progressLabel).toHaveText('Progress: 0/5 (0%)');

	await page.locator('button', { hasText: 'Submit' }).click();

	await expect(progressLabel).toHaveText('Progress: 2/5 (40%)');
});
