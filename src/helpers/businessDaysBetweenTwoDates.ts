import type { PublicHolidayRule } from './holidayRules'

export function BusinessDaysBetweenTwoDates(firstDate: Date,
  secondDate: Date,
  publicHolidays: Date[] | PublicHolidayRule[]): number {
  if (!(firstDate instanceof Date) || !(secondDate instanceof Date)) {
    throw new Error('Invalid date input')
  }
  if (secondDate <= firstDate) return 0

  let count = 0
  const currentDate = new Date(firstDate.getTime())

  currentDate.setDate(currentDate.getDate() + 1)

  while (currentDate < secondDate) {
    const day = currentDate.getDay()
    const isWeekday = day !== 0 && day !== 6
    const isPublicHoliday = Array.isArray(publicHolidays) && publicHolidays[0] instanceof Date
    ? (publicHolidays as Date[]).some(holiday => holiday.getTime() === currentDate.getTime()) // Task 2 logic
    : (publicHolidays as PublicHolidayRule[]).some(rule => rule.isHoliday(currentDate));
    if (isWeekday && !isPublicHoliday) {
      count++
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return count
}
