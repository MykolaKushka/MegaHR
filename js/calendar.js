let calendarArea = document.querySelector('#calendar');
let calendarCode = '';
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const Months = new Array(
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
  'December'
);

const Days = new Array('S', 'M', 'T', 'W', 'T', 'F', 'S');

// Check how many days in a month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Build days in month table
function showDaysInMonth(month, year) {
  let date = 1;
  let firstDay = new Date(year, month).getDay();

  for (let i = 0; i < 6; i++) {
    calendarCode += '<tr>';

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        calendarCode += '<td></td>';
      } else if (date > daysInMonth(month, year)) {
      } else {
        calendarCode += `<td>${date}</td>`;
        date++;
      }
    }

    calendarCode += '</tr>';
  }
}

// Build one month
calendarCode += `<table>
  <tr><td colspan="7">${currentYear}</td></tr>
  <tr><td colspan="7">${Months[currentMonth]}</td></tr><tr>`;

Days.forEach((item) => (calendarCode += `<td>${item}</td>`));

showDaysInMonth(currentMonth, currentYear);

calendarCode += `</tr></table>`;

calendarArea.innerHTML = calendarCode;
