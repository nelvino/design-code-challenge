export function weekdaysBetweenTwoDates(firstDate: Date, secondDate: Date): number {
  if (secondDate <= firstDate) {
    return 0
  }

  const current = new Date(firstDate)
  current.setDate(current.getDate() + 1)

  const end = new Date(secondDate)
  end.setDate(end.getDate() - 1)

  let weekdayCount = 0

  while (current <= end) {
    const day = current.getDay()
    // Count if it’s a weekday (Mon-Fri)
    if (day >= 1 && day <= 5) {
      weekdayCount++
    }
    current.setDate(current.getDate() + 1)
  }

  return weekdayCount
}