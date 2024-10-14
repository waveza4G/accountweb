import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function DateFilter({ setFilter }) {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setFilter({ type: "day", date: e.target.value }); // รูปแบบ yyyy-mm-dd
  };

  return (
    <div className="d-flex gap-2">
      <Form.Control type="date" value={date} onChange={handleDateChange} />
    </div>
  );
}

export default DateFilter;
    