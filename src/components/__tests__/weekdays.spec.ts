import { describe, it, expect } from 'vitest';
import { weekdaysBetweenTwoDates } from '@/helpers/weekdays';

describe('weekdaysBetweenTwoDates', () => {
  it('should return 4 weekdays between Monday 23/09/24 and Sunday 29/09/2025', () => {
    const startDate = new Date('2024-09-23');
    const endDate = new Date('2024-09-29');
    expect(weekdaysBetweenTwoDates(startDate, endDate)).toBe(4);
  });

  it('should return 0 weekdays if secondDate is equal to or before firstDate', () => {
    const startDate = new Date('2024-09-24');
    const endDate = new Date('2024-09-23');
    expect(weekdaysBetweenTwoDates(startDate, endDate)).toBe(0);
  });

  it('should return 1 weekday between Monday 07-Oct-2013 and Wednesday 09-Oct-2013', () => {
    const startDate = new Date('2013-10-07');
    const endDate = new Date('2013-10-09');
    expect(weekdaysBetweenTwoDates(startDate, endDate)).toBe(1);
  });

  it('should handle cases with no public holidays correctly', () => {
    const startDate = new Date('2013-10-07')
    const endDate = new Date('2014-01-01')
    expect(weekdaysBetweenTwoDates(startDate, endDate)).toBe(61);
  })
});