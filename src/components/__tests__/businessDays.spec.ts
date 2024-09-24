import { describe, it, expect } from 'vitest';
import { businessDaysBetweenTwoDates } from '@/helpers/businessDays';

describe('businessDaysBetweenTwoDates', () => {
  const publicHolidays: Date[] = [
    new Date('2024-01-01'),
    new Date('2024-01-26'),
    new Date('2024-04-25'),
    new Date('2024-12-25'),
    new Date('2024-12-26'),
  ];

  it('should return the correct number of business days excluding holidays', () => {
    const startDate = new Date('2024-09-23');
    const endDate = new Date('2024-09-29');
    expect(businessDaysBetweenTwoDates(startDate, endDate, publicHolidays)).toBe(4);
  });
});