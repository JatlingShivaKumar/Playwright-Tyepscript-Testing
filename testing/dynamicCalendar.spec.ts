import { test, expect } from '@playwright/test';

test("Calendar handling with while loop", async ({ page }) => {
  await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");
  await page.locator(".ui-datepicker-trigger").click();

  const targetDay = 29;
  const targetMonth = "August";
  const targetYear = 2026;

  const monthPicker = page.locator(".ui-datepicker-month");
  const yearPicker = page.locator(".ui-datepicker-year");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getMonthIndex = (name: string) => monthNames.indexOf(name);

  while (true) {
    const currentMonth = (await monthPicker.textContent())?.trim() || "";
    const currentYear = parseInt((await yearPicker.textContent()) || "0");

    if (currentMonth === targetMonth && currentYear === targetYear) break;

    const currentMonthIdx = getMonthIndex(currentMonth);
    const targetMonthIdx = getMonthIndex(targetMonth);

    if (currentYear > targetYear || (currentYear === targetYear && currentMonthIdx > targetMonthIdx)) {
      await page.locator(".ui-datepicker-prev").click();
    } else {
      await page.locator(".ui-datepicker-next").click();
    }
  }

  await page.getByRole("link", { name: targetDay.toString() }).click();

  const targetMonthNumber = (getMonthIndex(targetMonth) + 1).toString().padStart(2, "0");
  const targetDayNumber = targetDay.toString().padStart(2, "0");
  const expectedDate = `${targetMonthNumber}/${targetDayNumber}/${targetYear}`;

  await expect(page.locator("#sixth_date_picker")).toHaveValue(expectedDate);
});