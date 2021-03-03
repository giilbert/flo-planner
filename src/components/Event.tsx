import * as React from 'react';
import '../css/Event.css';

import EventLabel from './EventLabel';

export default function Event(props) {
  return (
    <div className="event">
      <h3>{props.data.title}</h3>

      <EventLabel colors={props.tags || []} />

      <hr className="separator" />

      <p>{props.data.description}</p>
      <p style={{ color: '#111b' }}>
        #{props.data.id} -{' '}
        {new Date(props.data.timestamp).toLocaleString('en-us', {
          hour12: true,
        })}
      </p>
    </div>
  );
}
