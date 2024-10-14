import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent({ entries }) {
  const [highlightedDates, setHighlightedDates] = useState([]);

  useEffect(() => {
    // ดึงวันที่ที่มีรายการจาก entries และเก็บในรูปแบบ "YYYY-MM-DD"
    const datesWithEntries = entries
      .map(entry => entry.date)
      .filter(date => date)
      .map(date => new Date(date).toISOString().split('T')[0]); // เก็บในรูปแบบ YYYY-MM-DD

    setHighlightedDates(datesWithEntries);
  }, [entries]);

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && highlightedDates.includes(date.toISOString().split('T')[0])) {
      return 'highlight';
    }
    return null;
  };

  return (
    <div>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
}

export default CalendarComponent;
