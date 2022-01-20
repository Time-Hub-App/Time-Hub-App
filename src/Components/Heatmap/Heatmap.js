import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import './Heatmap.css';

const today = new Date();

export default function Heatmap() {
  const randomValues = getRange(100).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });
  return (
    <div>
      <h1>react-calendar-heatmap demos</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {

          };
        }}
        showWeekdayLabels={true}
        onClick={value => alert('Clicked')}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Heatmap />, rootElement);