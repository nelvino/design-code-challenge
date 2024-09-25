import { describe, it, expect } from 'vitest';
import { BusinessDaysBetweenTwoDates } from '../../helpers/businessDaysBetweenTwoDates';

describe('businessDaysBetweenTwoDates', () => {
  it('should return correct business days excluding weekends and holidays', () => {
    const publicHolidays = [new Date(2024, 11, 25), new Date(2024, 11, 26)]; // Christmas and Boxing Day
    const firstDate = new Date(2024, 11, 23); // 23rd Dec 2024 (Monday)
    const secondDate = new Date(2024, 11, 29); // 29th Dec 2024 (Sunday)

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays);
    
    expect(result).toBe(2); // 2 business days (24th and 27th, excluding Christmas and Boxing Day)
  });

  it('should return 0 when the second date is equal or before the first date', () => {
    const publicHolidays: Date[] = [];
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 23); // same day

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays);
    
    expect(result).toBe(0);
  });

  it('should handle cases with no public holidays correctly', () => {
    const publicHolidays: Date[] = [];
    const firstDate = new Date(2024, 11, 23);
    const secondDate = new Date(2024, 11, 29);

    const result = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays);
    
    expect(result).toBe(2); // 2 business days (24th to 27th)
  });
});