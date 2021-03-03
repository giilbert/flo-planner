import * as React from 'react';

import EventsContainer from '../components/EventsContainer';
import Calendar from '../components/Calendar';

import '../css/Dashboard.css';

export default function Dashboard() {
  return (
    <div className="main dashboard">
      <EventsContainer />
      <Calendar />
    </div>
  );
}
