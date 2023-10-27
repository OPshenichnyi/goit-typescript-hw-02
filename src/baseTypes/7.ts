/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week{
  Monday = 'workday',
  Tuesday = 'workday',
  Wednesday = 'workday',
  Thursday = 'workday',
  Friday = 'workday',
  Saturday = 'weekend',
  Sunday = 'weekend'
}

function isWeekend(day: Week): boolean {
  if (day === 'weekend') {
    return true
  } else {
    return false
  }
}
