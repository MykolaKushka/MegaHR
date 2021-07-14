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
        _day = date < 10 ? '0' + date : date;
        _month = month;
        _month = _month + 1;
        _month = _month < 10 ? '0' + _month : _month;
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
    id: 0,
    color: '#f2c94c',
    name: 'Cameron Williamson',
    periods: [
      {
        start: '2021-06-28',
        end: '2021-07-06',
      },
      {
        start: '2021-08-09',
        end: '2021-08-18',
      },
    ],
  },
  {
    id: 1,
    color: '#F78F1E',
    name: 'Ronald Richards',
    periods: [
      {
        start: '2021-09-27',
        end: '2021-10-01',
      },
    ],
  },
  {
    id: 2,
    color: '#56ccf2',
    name: 'Jacob Jones',
    periods: [
      {
        start: '2021-07-19',
        end: '2021-07-23',
      },
    ],
  },
  {
    id: 3,
    color: '#bb6bd9',
    name: 'Bessie Cooper',
    periods: [
      {
        start: '2021-11-14',
        end: '2021-11-20',
      },
    ],
  },
  {
    id: 4,
    color: '#6fcf97',
    name: 'Devon Lane',
    periods: [
      {
        start: '2021-09-01',
        end: '2021-09-13',
      },
    ],
  },
];

//Show days off
function showDaysOff() {
  let startOffDate,
    endOffDate,
    isStartInPeriod,
    isEndInPeriod,
    id,
    color,
    employeeId = 0,
    _day,
    _month,
    isFirstDay,
    isLastDay;
  let _startDate = new Date(startDate);
  _startDate.setHours(0, 0, 0, 0);
  daysOff.forEach((item) => {
    isFirstDay = false;
    isLastDay = false;
    if (employeeId != item.id) {
      employeeId = item.id;
    }
    color = item.color;
    item.periods.forEach((period) => {
      isStartInPeriod = false;
      isEndInPeriod = false;
      startOffDate = new Date(period.start);
      startOffDate.setHours(0, 0, 0, 0);
      endOffDate = new Date(period.end);
      endOffDate.setHours(23, 59, 59, 999);

      if (startOffDate >= _startDate && startOffDate <= endDate) {
        isStartInPeriod = true;
        isFirstDay = true;
      }

      if (endOffDate >= _startDate && endOffDate <= endDate) {
        isEndInPeriod = true;
        isLastDay = true;
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
          _day = day.getDate() < 10 ? '0' + day.getDate() : day.getDate();
          _month = day.getMonth();
          _month = _month + 1;
          _month = _month < 10 ? '0' + _month : _month;
          id = `d-${day.getFullYear()}-${_month}-${_day}`;
          document.getElementById(id).style.backgroundColor = color;

          // Add styles for first and last day of period
          if (_day == startOffDate.getDate() && isFirstDay) {
            document.getElementById(id).classList.add('day-first');
          } else if (_day == endOffDate.getDate() && isLastDay) {
            document.getElementById(id).classList.add('day-last');
          }
        }
      }
    });
  });
}

showDaysOff();
