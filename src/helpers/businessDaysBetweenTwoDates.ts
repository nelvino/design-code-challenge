import type { PublicHolidayRule } from './holidayRules'

export function BusinessDaysBetweenTwoDates(
  firstDate: Date,
  secondDate: Date,
  publicHolidays: Date[] | PublicHolidayRule[]
): number {
  if (!(firstDate instanceof Date) || !(secondDate instanceof Date)) {
    throw new Error('Invalid date input')
  }
  if (secondDate <= firstDate) return 0

  let count = 0
  const currentDate = new Date(firstDate.getTime())

  currentDate.setDate(currentDate.getDate() + 1)

  // Helper function to compare only the date part, not time
  const isSameDate = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString()
  }

  while (currentDate < secondDate) {
    const day = currentDate.getDay()
    const isWeekday = day !== 0 && day !== 6 // Check if it's Monday to Friday

    let isPublicHoliday = false

    // Task 2: Fixed holidays logic
    if (Array.isArray(publicHolidays) && publicHolidays[0] instanceof Date) {
      isPublicHoliday = (publicHolidays as Date[]).some((holiday) =>
        isSameDate(holiday, currentDate)
      )
    }

    // Task 3: Public holiday rules logic (Ensure no overlap)
    else if (Array.isArray(publicHolidays) && publicHolidays[0] instanceof Object) {
      isPublicHoliday = (publicHolidays as PublicHolidayRule[]).some((rule) => {
        const isHoliday = rule.isHoliday(currentDate)
        return isHoliday
      })
    }

    if (isWeekday && !isPublicHoliday) {
      count++
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return count
}
