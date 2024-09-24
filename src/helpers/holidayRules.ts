import { datesAreEqual } from './utils';

export interface PublicHolidayRule {
  name: string;
  isHoliday: (date: Date) => boolean;
}

// Fixed holiday dates
export const fixedHolidays: Date[] = [
  new Date('2024-01-01'),
  new Date('2024-01-26'),
  new Date('2024-04-25'),
  new Date('2024-12-25'),
  new Date('2024-12-26'),
];

// New logic for Task 3, Public holidays shift if it falls on a weekend
const shiftingHolidays: PublicHolidayRule[] = [
  {
    name: "New Year's Day",
    isHoliday: (date: Date) => {
      const isFixedHoliday = date.getDate() === 1 && date.getMonth() === 0; // January 1st
      const isShiftedHoliday = date.getDay() === 1 && (date.getDate() === 2 || date.getDate() === 3); // Shifts to Monday
      return isFixedHoliday || isShiftedHoliday;
    },
  },
  {
    name: 'Christmas Day',
    isHoliday: (date: Date) => {
      const isFixedHoliday = date.getDate() === 25 && date.getMonth() === 11; // December 25th
      const isShiftedHoliday = date.getDay() === 1 && date.getDate() === 27; // Shifts to Monday
      return isFixedHoliday || isShiftedHoliday;
    },
  },
  {
    name: 'Boxing Day',
    isHoliday: (date: Date) => {
      const isFixedHoliday = date.getDate() === 26 && date.getMonth() === 11; // December 26th
      const isShiftedHoliday = date.getDay() === 1 && date.getDate() === 28; // Shifts to Monday
      return isFixedHoliday || isShiftedHoliday;
    },
  },
];

function getEasterSunday(year: number): Date {
  const f = Math.floor,
    G = year % 19,
    C = f(year / 100),
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return new Date(year, month - 1, day);
}

const dynamicHolidays: PublicHolidayRule[] = [
  {
    name: "Queen's Birthday",
    isHoliday: (date: Date) => {
      // Second Monday in June
      const month = date.getMonth();
      const day = date.getDay();
      const week = Math.floor((date.getDate() - 1) / 7) + 1;
      return month === 5 && day === 1 && week === 2;
    },
  },
  {
    name: "Good Friday",
    isHoliday: (date: Date) => {
      const year = date.getFullYear();
      const easterSunday = getEasterSunday(year);
      const goodFriday = new Date(easterSunday);
      goodFriday.setDate(easterSunday.getDate() - 2); // two days before Easter Sunday
      return datesAreEqual(date, goodFriday);
    },
  },
  {
    name: "Easter Monday",
    isHoliday: (date: Date) => {
      const year = date.getFullYear();
      const easterSunday = getEasterSunday(year);
      const easterMonday = new Date(easterSunday);
      easterMonday.setDate(easterSunday.getDate() + 1); // one day after Easter Sunday
      return datesAreEqual(date, easterMonday);
    },
  },
];

export const publicHolidayRules: PublicHolidayRule[] = [
  {
    name: 'Static Holidays',
    isHoliday: (date: Date) => fixedHolidays.some(holiday => holiday.getTime() === date.getTime()),
  },
  ...shiftingHolidays,
  ...dynamicHolidays,
];