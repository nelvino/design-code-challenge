export function businessDaysBetweenTwoDates(
    firstDate: Date,
    secondDate: Date,
    publicHolidays: Date[]
  ): number {
    if (secondDate <= firstDate) return 0;
  
    let count = 0;
    const currentDate = new Date(firstDate.getTime());
  
    currentDate.setDate(currentDate.getDate() + 1);
  
    while (currentDate < secondDate) {
      const day = currentDate.getDay();
      
      // Check if it's a weekday (Monday to Friday)
      const isWeekday = day !== 0 && day !== 6;
  
      // Check if the current day is a public holiday
      const isPublicHoliday = publicHolidays.some(
        holiday => holiday.getTime() === currentDate.getTime()
      );
  
      // Only count if it's a weekday and not a public holiday
      if (isWeekday && !isPublicHoliday) {
        count++;
      }
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return count;
  }