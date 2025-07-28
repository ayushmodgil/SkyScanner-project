import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isSameDay from 'date-fns/isSameDay';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateSelect = date => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  return (
    <div className="App">
      <h1>Flight Schedule</h1>

      <BpkCalendar
        id="calendar"
        onDateSelect={onDateSelect}
        selectedDate={selectedDate}
      />

      <button>Continue</button>
    </div>
  );
}

export default App;
