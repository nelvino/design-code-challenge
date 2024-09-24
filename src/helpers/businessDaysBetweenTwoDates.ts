export function BusinessDaysBetweenTwoDates(
  firstDate: Date,
  secondDate: Date,
  publicHolidays: Date[]
): number {
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
    const isPublicHoliday = publicHolidays.some(
      (holiday) => holiday.getTime() === currentDate.getTime()
    )
    if (isWeekday && !isPublicHoliday) {
      count++
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return count
}
