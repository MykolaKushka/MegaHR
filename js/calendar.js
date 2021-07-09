let calendarArea = document.querySelector('#calendar');
let calendarCode = '';
let monthsQuantitySelector = document.querySelector(
  'select#monthsQuantitySelector'
);
let monthsQuantity = parseInt(monthsQuantitySelector.value);
let startDate = new Date();
let endMonth = '';
let endYear = '';

const Days = new Array('S', 'M', 'T', 'W', 'T', 'F', 'S');

// Check how many days in a month
function daysInMonth(iMonth, iYear) {
  return new Date(iYear, iMonth, 0).getDate();
}

// Show year
function showYearTitle() {
  calendarCode += `<div class="calendar-header">
    <div class="prev" id="prevBtnCalendar"></div>
    <div id="year-title" class="year-title" colspan="7"></div>
    <div class="next" id="nextBtnCalendar"></div>
  </div>`;
}

// Add year and month title
function addYearMonthsTitle() {
  let titlePlace = document.querySelector('#year-title');
  let year = startDate.getFullYear();
  let startMonth = startDate
    .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  titlePlace.innerHTML = `${startMonth} ${year} - ${endMonth} ${endYear}`;
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
function createCalendar() {
  let month;
  let shownYear;
  let date = new Date(startDate);
  let monthLongName;

  calendarCode = '';

  showYearTitle();

  calendarCode += '<div class="months-container">';

  for (let i = 0; i < monthsQuantity; i++) {
    month = date.getMonth();
    shownYear = date.getFullYear();
    monthLongName = date.toLocaleString('en-us', { month: 'long' });
    calendarCode += `<table class="month">
  <thead>
  <tr><th class="month-title" colspan="7">${monthLongName}</th></tr><tr>`;

    Days.forEach(
      (item) => (calendarCode += `<th class="day-header">${item}</th>`)
    );

    calendarCode += `</tr></thead><tbody>`;

    showDaysInMonth(month, shownYear);

    calendarCode += `</tbody></tr></table>`;

    endMonth = date.toLocaleString('en-us', { month: 'short' }).toLowerCase();

    endYear = date.getFullYear();

    date.setMonth(date.getMonth() + 1);
  }

  calendarCode += '</div>';
  calendarArea.innerHTML = calendarCode;
}

createCalendar();
addYearMonthsTitle();
addMonthsHandler();

// Select months quantity
$('#monthsQuantitySelector').on('change', (e) => {
  monthsQuantity = parseInt(e.target.value);
  createCalendar();
  addYearMonthsTitle();
  addMonthsHandler();
});

// Show prev and next months
function addMonthsHandler() {
  $('.calendar-header').on('click', '.prev', function () {
    startDate.setMonth(startDate.getMonth() - monthsQuantity);
    createCalendar();
    addYearMonthsTitle();
    addMonthsHandler();
  });

  $('.calendar-header').on('click', '.next', function () {
    startDate.setMonth(startDate.getMonth() + monthsQuantity);
    createCalendar();
    addYearMonthsTitle();
    addMonthsHandler();
  });
}
