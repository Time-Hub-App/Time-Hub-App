import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import './Heatmap.css';

import { fetchEntries } from '../../Services/journalEntries';

const today = new Date();

export default function Heatmap() {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntries();
      setEntries(data);
    };
    fetchData();
  }, []);

  const entryValues = entries.map((entry => {
    return {
      date: shiftDate(entry.created_at, 0),
      count: entries.length,
      emotion: entry.emotion
    };
  }));

  const randomValues = getRange(365).map(index => {

    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });


  console.log(entryValues);

  return (
    <div className="heatmap">
      <CalendarHeatmap
        startDate={shiftDate(today, -300)}
        endDate={today}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;

        } }
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date}`,
          } ;
            
        }
        } 
        showWeekdayLabels={false}
        onClick={value => {
          if (!value) {
            alert('no value');
          }
          alert(`${value.count}`);
        }} />

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
