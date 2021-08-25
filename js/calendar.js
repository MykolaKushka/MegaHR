'use strict';
let daysOff = {
  Data: [
    {
      EmployeeId: '97005000',
      EmployeeName: 'Denise Flanders',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-07-15T00:00:00',
      AbsenceFinishDate: '2021-07-22T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 6.0,
      AbsenceRequestedHours: 46.8,
      AbsenceState: 'Submitted',
      AbsenceLabelColor: '2CA4BF',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005035',
      EmployeeName: 'Christina Hunter',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-01-05T00:00:00',
      AbsenceFinishDate: '2021-01-13T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 7.0,
      AbsenceRequestedHours: 54.6,
      AbsenceState: 'Approved',
      AbsenceLabelColor: '8CD19D',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005035',
      EmployeeName: 'Christina Hunter',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-07-20T00:00:00',
      AbsenceFinishDate: '2021-07-22T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 3.0,
      AbsenceRequestedHours: 23.4,
      AbsenceState: 'Submitted',
      AbsenceLabelColor: '8CD19D',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005035',
      EmployeeName: 'Christina Hunter',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-04-14T00:00:00',
      AbsenceFinishDate: '2021-04-15T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 2.0,
      AbsenceRequestedHours: 15.6,
      AbsenceState: 'Approved',
      AbsenceLabelColor: '8CD19D',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005039',
      EmployeeName: 'Richard Hynes',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-01-04T00:00:00',
      AbsenceFinishDate: '2021-01-08T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 5.0,
      AbsenceRequestedHours: 39.0,
      AbsenceState: 'Approved',
      AbsenceLabelColor: '89bdd3',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005069',
      EmployeeName: 'John Dowling',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-07-19T00:00:00',
      AbsenceFinishDate: '2021-07-19T00:00:00',
      AbsenceDescription: 'Absent Paid Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 1.0,
      AbsenceRequestedHours: 7.8,
      AbsenceState: 'Approved',
      AbsenceLabelColor: 'e05038',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005069',
      EmployeeName: 'John Dowling',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-01-04T00:00:00',
      AbsenceFinishDate: '2021-01-08T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 5.0,
      AbsenceRequestedHours: 39.0,
      AbsenceState: 'Approved',
      AbsenceLabelColor: 'e05038',
      AbsenceTextColor: 'ffffff',
    },
    {
      EmployeeId: '97005069',
      EmployeeName: 'John Dowling',
      AbsenceTypeId: null,
      AbsenceStartDate: '2021-01-04T00:00:00',
      AbsenceFinishDate: '2021-01-04T00:00:00',
      AbsenceDescription: 'Annual Leave',
      AbsenceHalfStartDay: false,
      AbsenceHalfFinishDay: false,
      AbsenceRequestedDays: 1.0,
      AbsenceRequestedHours: 7.8,
      AbsenceState: 'Approved',
      AbsenceLabelColor: 'e05038',
      AbsenceTextColor: 'ffffff',
    },
  ],
  AbsenceCalendarShiftType: '4',
  AbsenceRequestedDaysOrHours: 'Days',
  AbsenceDataCutOffYear: 2016,
  AbsenceCalendarFilter: [
    {
      Text: 'Denise Flanders',
      Value: 'EmployeeId_97005000',
      LabelColor: '2CA4BF',
      TextColor: 'ffffff',
      Id: 'AbsenceType_EmployeeId_97005000',
    },
    {
      Text: 'Christina Hunter',
      Value: 'EmployeeId_97005035',
      LabelColor: '8CD19D',
      TextColor: 'ffffff',
      Id: 'AbsenceType_EmployeeId_97005035',
    },
    {
      Text: 'Richard Hynes',
      Value: 'EmployeeId_97005039',
      LabelColor: '89bdd3',
      TextColor: 'ffffff',
      Id: 'AbsenceType_EmployeeId_97005039',
    },
    {
      Text: 'John Dowling',
      Value: 'EmployeeId_97005069',
      LabelColor: 'e05038',
      TextColor: 'ffffff',
      Id: 'AbsenceType_EmployeeId_97005069',
    },
  ],
  CalendarNationalHolidays: [
    '2021-01-01T00:00:00',
    '2021-03-17T00:00:00',
    '2021-04-05T00:00:00',
    '2021-05-03T00:00:00',
    '2021-06-07T00:00:00',
    '2021-08-02T00:00:00',
    '2021-10-25T00:00:00',
    '2021-12-27T00:00:00',
    '2021-12-28T00:00:00',
    '2022-01-03T00:00:00',
    '2022-03-17T00:00:00',
    '2022-04-18T00:00:00',
    '2022-05-02T00:00:00',
    '2022-06-06T00:00:00',
    '2022-08-01T00:00:00',
    '2022-10-31T00:00:00',
    '2022-12-26T00:00:00',
    '2022-12-27T00:00:00',
  ],
  IsThereOverlappingAbsence: true,
  ErrorMessage: null,
};

function calendarInit() {
  let calendarArea = document.querySelector('#calendar');
  let calendarCode = '';
  let monthsQuantitySelector = document.querySelector(
    '#monthsQuantitySelector'
  );
  let monthsQuantity = parseInt(monthsQuantitySelector.value);
  let startDate = new Date();

  // Set month if year selected
  if (monthsQuantitySelector.value == '12') {
    startDate.setMonth(0);
  }

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
          _day = date.toString().padStart(2, '0');
          _month = month;
          _month++;
          _month = _month.toString().padStart(2, '0');
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

    calendarCode += '</div>';
    calendarArea.innerHTML = calendarCode;
  }

  createCalendar();
  addYearMonthsTitle();
  addMonthsHandler();

  // Select months quantity
  $(monthsQuantitySelector).on('change', (e) => {
    monthsQuantity = parseInt(e.target.value);
    // Set start depends on select
    if (monthsQuantity != 12) {
      startDate = new Date();
      startDate.setDate(1);
    } else {
      startDate = new Date();
      startDate.setMonth(0);
      startDate.setDate(1);
    }
    createCalendar();
    addYearMonthsTitle();
    addMonthsHandler();
    showDaysOff();
    hoverHandler();
  });

  // Show prev and next months
  function addMonthsHandler() {
    let prev = document.querySelector('#prevBtnCalendar');
    let next = document.querySelector('#nextBtnCalendar');

    prev.addEventListener('click', function () {
      // Check start period for calendar
      let tempDate = new Date(startDate);
      tempDate.setMonth(tempDate.getMonth() - monthsQuantity);
      if (
        tempDate.getFullYear() >= daysOff.AbsenceDataCutOffYear &&
        tempDate.getMonth() >= 0
      ) {
        startDate.setMonth(startDate.getMonth() - monthsQuantity);
        createCalendar();
        addYearMonthsTitle();
        addMonthsHandler();
        showDaysOff();
        hoverHandler();
      }
    });

    next.addEventListener('click', function () {
      startDate.setMonth(startDate.getMonth() + monthsQuantity);
      createCalendar();
      addYearMonthsTitle();
      addMonthsHandler();
      showDaysOff();
      hoverHandler();
    });
  }

  // Checkbox filters
  let calendarFilter = document.querySelector('#calendarFilter');
  let filtersCode = '';
  let cssCheckboxesColors = '';

  function addCheckbox(name, color, id) {
    filtersCode += `<label class="mycheckbox-2 bgcolor-${id}">
      <input id="employee-${id}" type="checkbox" checked>
      <span>${name}</span>
    </label>`;

    calendarFilter.innerHTML = filtersCode;

    cssCheckboxesColors += `
    .calendars-checkbox .mycheckbox-2.bgcolor-${id} input:checked + span::before{
      background-color: #${color};
    }

    .calendars-checkbox .mycheckbox-2.bgcolor-${id} span::before{
      border-color: #${color};
    }`;
  }

  // Filter handlers
  function filterHandlers() {
    let checkboxFilters = document.querySelectorAll('#calendarFilter input');

    document.addEventListener(
      'DOMContentLoaded',
      function () {
        for (let checkbox of checkboxFilters) {
          checkbox.addEventListener('change', function () {
            cleanData();
            showDaysOff();
          });
        }
      },
      false
    );
  }

  // Clean data
  function cleanData() {
    let dataDays = document.querySelectorAll('#calendar .day');
    for (let dayItem of dataDays) {
      dayItem.classList.remove('day-first', 'day-last', 'day-multi');
      dayItem.removeAttribute('style');
    }
  }

  // Show holydays
  function showHolydays(holyday) {
    document.getElementById(`d-${holyday}`).classList.add('day-holyday');
  }

  // Show days off
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
    filtersCode = '';
    cssCheckboxesColors = '';

    let _startDate = new Date(startDate);
    _startDate.setHours(0, 0, 0, 0);

    daysOff.CalendarNationalHolidays.forEach((holyday) => {
      holyday = holyday.slice(0, 10);
      let holydayDate = new Date(holyday);
      holydayDate.setHours(0, 0, 0, 0);

      // Check if holyday is in shown period
      if (holydayDate >= _startDate && holydayDate <= endDate) {
        showHolydays(holyday);
      }
    });

    daysOff.Data.forEach((item) => {
      let checkbox = document.querySelector(
        `#calendarFilter #employee-${item.EmployeeId}`
      );
      if (!checkbox) {
        addCheckbox(item.EmployeeName, item.AbsenceLabelColor, item.EmployeeId);
      }

      // Check if employee checkbox is checked
      let employeeCheckboxId = `#employee-${item.EmployeeId}`;

      if ($(employeeCheckboxId)[0].checked) {
        isFirstDay = false;
        isLastDay = false;
        if (employeeId != item.EmployeeId) {
          employeeId = item.EmployeeId;
        }
        color = item.AbsenceLabelColor;
        isStartInPeriod = false;
        isEndInPeriod = false;
        startOffDate = new Date(item.AbsenceStartDate.slice(0, 10));
        startOffDate.setHours(0, 0, 0, 0);
        endOffDate = new Date(item.AbsenceFinishDate.slice(0, 10));
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
            _day = day.getDate().toString().padStart(2, '0');
            _month = day.getMonth();
            _month++;
            _month = _month.toString().padStart(2, '0');
            id = `d-${day.getFullYear()}-${_month}-${_day}`;

            let cell = document.getElementById(id);

            if (cell.style.backgroundColor) {
              cell.style = '';
              cell.classList.add('day-multi');
            } else cell.style.backgroundColor = `#${color}`;

            // Add styles for first and last day of period
            if (
              _day == startOffDate.getDate() &&
              isFirstDay &&
              _day == endOffDate.getDate() &&
              isLastDay
            ) {
              cell.classList.add('day-first', 'day-last');
            } else if (_day == startOffDate.getDate() && isFirstDay) {
              cell.classList.add('day-first');
            } else if (_day == endOffDate.getDate() && isLastDay) {
              cell.classList.add('day-last');
            }
          }
        }
      }
    });

    let style = document.createElement('style');
    style.innerHTML = cssCheckboxesColors;
    document.head.appendChild(style);

    filterHandlers();
  }

  showDaysOff();

  // Hover handler
  function hoverHandler() {
    let dataDays = document.querySelectorAll('#calendar .day');

    for (let dayItem of dataDays) {
      dayItem.addEventListener('mouseenter', (e) => {
        if (
          e.target.classList.contains('day-multi') ||
          e.target.style.backgroundColor != ''
        )
          showTooltip(e.target);
      });

      dayItem.addEventListener('mouseleave', (e) => {
        if (
          e.target.classList.contains('day-multi') ||
          e.target.style.backgroundColor != ''
        ) {
          let tooltip = document.querySelectorAll(
            `#${e.target.id} .day-tooltip`
          );
          document.getElementById(`${e.target.id}`).removeChild(tooltip[0]);
        }
      });
    }
  }

  // Check tooltip position
  function tooltipPosition(e, position) {
    const rect = e.getBoundingClientRect();
    let elemWidth = 150;
    let rightElPosition = rect.right + elemWidth;
    if (
      rightElPosition >=
      (window.innerWidth || document.documentElement.clientWidth)
    ) {
      position.style.top = '40px';
      position.style.left = 'auto';
      position.style.right = '30px';
    } else {
      position.style.top = '40px';
      position.style.left = `30px`;
    }
  }

  // Show tooltip data
  function showTooltip(el) {
    let tooltip = document.createElement('div');
    tooltip.className = 'day-tooltip';

    let date = new Date(el.id.slice(2, 12));
    let data = '';

    daysOff.Data.forEach((item) => {
      let employeeCheckboxId = `#employee-${item.EmployeeId}`;
      if (
        $(employeeCheckboxId)[0].checked &&
        date >= new Date(item.AbsenceStartDate.slice(0, 10)) &&
        date <= new Date(item.AbsenceFinishDate.slice(0, 10))
      ) {
        let startData = new Date(item.AbsenceStartDate.slice(0, 10));
        let startDay = startData.getDate();
        startDay = startDay.toString().padStart(2, '0');
        let startMonth = startData.toLocaleString('en', { month: 'short' });

        let endData = new Date(item.AbsenceFinishDate.slice(0, 10));
        let endDay = endData.getDate();
        endDay = endDay.toString().padStart(2, '0');
        let endMonth = endData.toLocaleString('en', { month: 'short' });

        data += `<p><i style="background-color:#${item.AbsenceLabelColor}"></i><span>${item.EmployeeName}</span><br><span>${startDay} ${startMonth} - ${endDay} ${endMonth}</span></p>`;
      }
    });

    tooltip.innerHTML = data;

    tooltipPosition(el, tooltip);

    el.append(tooltip);
  }

  hoverHandler();
}

calendarInit();
