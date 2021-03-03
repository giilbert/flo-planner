import * as React from 'react';
import { useState, useEffect } from 'react';

import '../css/Time.css';

export default function Time(props) {
  const [date, setDate] = useState('');

  // component mounted
  useEffect(() => {
    let interval = setInterval(() => {
      setDate(getFormattedDateString());
    }, 1000);

    // component will unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  let extraClassName = props.big === true ? ' big' : '';

  return (
    <div className={'time-display' + extraClassName}>
      <h4>{date}</h4>
    </div>
  );
}

const getFormattedDateString = () => {
  return new Date().toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};
