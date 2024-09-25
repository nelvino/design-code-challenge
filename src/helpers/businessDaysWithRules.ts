import type { PublicHolidayRule } from './holidayRules'

export function BusinessDaysBetweenTwoDatesWithRules(
  firstDate: Date,
  secondDate: Date,
  publicHolidayRules: PublicHolidayRule[]
): number {
  if (secondDate <= firstDate) return 0

  let count = 0
  const currentDate = new Date(firstDate.getTime())

  currentDate.setDate(currentDate.getDate() + 1)

  while (currentDate < secondDate) {
    const day = currentDate.getDay()

    const isWeekday = day !== 0 && day !== 6

    const isPublicHoliday = publicHolidayRules.some((rule) => rule.isHoliday(currentDate))

    if (isWeekday && !isPublicHoliday) {
      count++
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return count
}
