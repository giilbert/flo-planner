import * as React from 'react';

import '../css/Calendar.css';

export default function Calendar() {
  return (
    <div className="calendar">
      <table>
        <tbody>
          <CalendarRow rowStart={-3} />
          <CalendarRow rowStart={4} />
          <CalendarRow rowStart={11} />
          <CalendarRow rowStart={18} />
          <CalendarRow rowStart={25} />
        </tbody>
      </table>
    </div>
  );
}

function CalendarRow({ rowStart }) {
  return (
    <tr className="calendar-row">
      {Array(7)
        .fill(0)
        .map((v, i) => {
          let weekNumber = i + rowStart;
          return <td key={i}>{weekNumber > 0 ? weekNumber : null}</td>;
        })}
    </tr>
  );
}
