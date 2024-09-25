import { describe, it, expect } from 'vitest';
import { BusinessDaysBetweenTwoDatesWithRules } from '../../helpers/businessDaysWithRules';
import { publicHolidayRules } from '../../helpers/holidayRules';

describe('BusinessDaysBetweenTwoDatesWithRules', () => {
  it('should return correct business days excluding weekends and holidays with rules', () => {
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 29);

    const result = BusinessDaysBetweenTwoDatesWithRules(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(2);
  });

  it('should return 0 when the second date is equal or before the first date', () => {
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 23);

    const result = BusinessDaysBetweenTwoDatesWithRules(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(0);
  });

  it('should handle cases where holidays are shifted based on rules', () => {
    const firstDate = new Date(2026, 11, 24);
    const secondDate = new Date(2026, 11, 29); // Including Boxing Day shift to Monday

    const result = BusinessDaysBetweenTwoDatesWithRules(firstDate, secondDate, publicHolidayRules);
    
    expect(result).toBe(0);
  });
});