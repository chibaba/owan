function generateAppDateFormat() {
  const today = new Date();
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let dayNumber = today.getDay();
  let dayName = days[dayNumber];
  let monthName = months[today.getMonth()];
  let year = today.getFullYear();

  return dayName + ', ' + dayNumber + ' ' + monthName + ' ' + year;
}

export default generateAppDateFormat;
