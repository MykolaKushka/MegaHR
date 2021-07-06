let calendarArea = document.querySelector('#calendar');
let calendarCode = '';
let today = new Date();
let currentMonth = today.getMonth();
let monthNumber = currentMonth;
let currentYear = today.getFullYear();
let shownYear = currentYear;
let monthsQuantitySelector = document.querySelector(
  'select#monthsQuantitySelector'
);
let monthsQuantity = monthsQuantitySelector.value;

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

// Show year
function showYearTitle() {
  calendarCode += `<div class="calendar-header"><div class="year-title" colspan="7">${shownYear}</div></div>`;
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
        calendarCode += `<td class="day">${date}</td>`;
        date++;
      }
    }

    calendarCode += '</tr>';
  }
}

// Build one month
function buildMonths(months) {
  showYearTitle();

  calendarCode += '<div class="months-container">';

  for (let i = 0; i < months; i++) {
    calendarCode += `<table class="month">
  <thead>
  <tr><th class="month-title" colspan="7">${Months[monthNumber]}</th></tr><tr>`;

    Days.forEach(
      (item) => (calendarCode += `<th class="day-header">${item}</th>`)
    );

    calendarCode += `</tr></thead><tbody>`;

    showDaysInMonth(monthNumber, shownYear);

    if (monthNumber < 11) {
      monthNumber++;
    } else {
      monthNumber = 0;
      shownYear++;
    }

    calendarCode += `</tbody></tr></table>`;
  }

  calendarCode += '</div>';

  calendarArea.innerHTML = calendarCode;
}

buildMonths(monthsQuantity);

$('#monthsQuantitySelector').on('change', (e) => {
  calendarCode = '';
  monthNumber = currentMonth;
  shownYear = currentYear;
  monthsQuantity = e.target.value;

  buildMonths(monthsQuantity);
});
