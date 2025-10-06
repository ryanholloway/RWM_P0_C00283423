import { expect, test } from '@playwright/test';

test('navigate', async ({ page }) => {
	await page.goto('/lab/checklist');
	await expect(page.getByTestId('title')).toContainText('Progress Checklist');
});
