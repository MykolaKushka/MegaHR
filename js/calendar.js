let calendarArea = document.querySelector('#calendar');
let calendarCode = '';
let monthsQuantitySelector = document.querySelector(
  'select#monthsQuantitySelector'
);
let monthsQuantity = parseInt(monthsQuantitySelector.value);
let startDate = new Date();
startDate.setDate(1);
let endMonthTitle = '';
let endYear = '';
let endDate;
let startMonth, startYear;

const Days = new Array('S', 'M', 'T', 'W', 'T', 'F', 'S');

// Check how many days in a month
function daysInMonth(iMonth, iYear) {
  return new Date(iYear, iMonth + 1, 0).getDate();
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
  let startMonthTitle = startDate
    .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  titlePlace.innerHTML = `${startMonthTitle} ${year} - ${endMonthTitle} ${endYear}`;
}

// Build days in month table
function showDaysInMonth(month, year) {
  let date = 1;
  let _day, _month;
  let firstDay = new Date(year, month).getDay();

  for (let i = 0; i < 6; i++) {
    calendarCode += '<tr>';

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        calendarCode += '<td></td>';
      } else if (date > daysInMonth(month, year)) {
      } else {
        _day = date < 10 ? `0${date}` : date;
        _month = month;
        _month = _month + 1;
        _month = _month < 10 ? `0${_month}` : _month;
        calendarCode += `<td class="day" id="d-${year}-${_month}-${_day}">${date}</td>`;
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

  startMonth = startDate.getMonth();
  startYear = startDate.getFullYear();

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
    if (i < monthsQuantity - 1) date.setMonth(date.getMonth() + 1);
  }

  endMonthTitle = date
    .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  endYear = date.getFullYear();

  endDate = new Date(endYear, date.getMonth() + 1, 0);
  endDate.setHours(23, 59, 59, 999);

  //console.log(endDate);

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
  showDaysOff();
});

// Show prev and next months
function addMonthsHandler() {
  $('.calendar-header').on('click', '.prev', function () {
    startDate.setMonth(startDate.getMonth() - monthsQuantity);
    createCalendar();
    addYearMonthsTitle();
    addMonthsHandler();
    showDaysOff();
  });

  $('.calendar-header').on('click', '.next', function () {
    startDate.setMonth(startDate.getMonth() + monthsQuantity);
    createCalendar();
    addYearMonthsTitle();
    addMonthsHandler();
    showDaysOff();
  });
}

// Days off
let daysOff = [
  {
    id: 1,
    name: 'Cameron Williamson',
    periods: [
      {
        start: '2021-06-28',
        end: '2021-07-06',
      },
      {
        start: '2021-08-02',
        end: '2021-08-05',
      },
    ],
  },
  {
    id: 2,
    name: 'Jacob Jones',
    periods: [
      {
        start: '2021-09-27',
        end: '2021-10-01',
      },
    ],
  },
];

//Show days off
function showDaysOff() {
  let startOffDate, endOffDate, isStartInPeriod, isEndInPeriod, id;
  let _startDate = new Date(startDate);
  _startDate.setHours(0, 0, 0, 0);
  daysOff.forEach((item) => {
    item.periods.forEach((period) => {
      isStartInPeriod = false;
      isEndInPeriod = false;
      startOffDate = new Date(period.start);
      startOffDate.setHours(0, 0, 0, 0);
      endOffDate = new Date(period.end);
      endOffDate.setHours(23, 59, 59, 999);

      if (startOffDate >= _startDate && startOffDate <= endDate) {
        isStartInPeriod = true;
      }

      if (endOffDate >= _startDate && endOffDate <= endDate) {
        isEndInPeriod = true;
      }

      if (isStartInPeriod && !isEndInPeriod) {
        endOffDate = new Date(endDate);
        isEndInPeriod = true;
      }

      if (!isStartInPeriod && isEndInPeriod) {
        startOffDate = new Date(_startDate);
        isStartInPeriod = true;
      }

      if (isStartInPeriod && isEndInPeriod) {
        for (
          let day = new Date(startOffDate);
          day <= endOffDate;
          day.setDate(day.getDate() + 1)
        ) {
          let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
          day = new Date(day - tzoffset);
          id = day.toISOString().slice(0, 10);
          document.getElementById('d-' + id).classList.add('day-yellow');
        }
      }
    });
  });
}

showDaysOff();
