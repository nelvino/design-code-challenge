import { describe, it, expect } from 'vitest'
import { BusinessDaysBetweenTwoDates } from '../../helpers/businessDaysBetweenTwoDates'
import { getFixedHolidays, publicHolidayRules } from '../../helpers/holidayRules';

//TASK 2 LOGIC
describe('businessDaysBetweenTwoDates', () => {
  it('should return correct business days excluding weekends and holidays', () => {
    const firstDate = new Date(2024, 11, 23) // 23rd Dec 2024 (Monday)
    const secondDate = new Date(2024, 11, 29) // 29th Dec 2024 (Sunday)
    const publicHolidays = getFixedHolidays(2024);

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays)

    expect(result).toBe(2) // 2 business days (24th and 27th, excluding Christmas and Boxing Day)
  })

  it('should return 0 when the second date is equal or before the first date', () => {
    const firstDate = new Date(2024, 11, 23)
    const secondDate = new Date(2024, 11, 23) // same day
    const publicHolidays = getFixedHolidays(2024);

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays)

    expect(result).toBe(0)
  })

  it('should handle cases with no public holidays correctly', () => {
    const firstDate = new Date(2024, 11, 23)
    const secondDate = new Date(2024, 11, 29)
    const publicHolidays = getFixedHolidays(2024)

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays)

    expect(result).toBe(2) // 2 business days (24th to 27th)
  })

  it('should handle cases with no public holidays correctly', () => {
    const firstDate = new Date(2013, 9, 7)
    const secondDate = new Date(2014, 0, 1)
    const publicHolidays = getFixedHolidays(2013)

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays)

    expect(result).toBe(59) // removes Christmas and Boxing Day
  })
})

//TASK 3 LOGIC

describe('BusinessDaysBetweenTwoDatesWithRules', () => {
  it('should return correct business days excluding weekends and holidays with rules', () => {
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 29);

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(2);
  });

  it('should return 0 when the second date is equal or before the first date', () => {
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 23);

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(0);
  });

  it('should handle cases where holidays are shifted based on rules', () => {
    const firstDate = new Date(2026, 11, 24);
    const secondDate = new Date(2026, 11, 29); // Including Boxing Day shift to Monday

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(0);
  });
});
