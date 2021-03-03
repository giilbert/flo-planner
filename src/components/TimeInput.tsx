import * as React from 'react';
import { createRef, useState, useContext } from 'react';

interface DateInputProps {
  name: string;
  ctx: React.Context<any>;
}

export default function DateInput({ name, ctx }: DateInputProps) {
  const hourRef = createRef<HTMLInputElement>();
  const minuteRef = createRef<HTMLInputElement>();
  const fullDayRef = createRef<HTMLInputElement>();
  const [time, setTime] = useState('AM');
  const [disabled, setDisabled] = useState(false);
  const { inputValues, setInputValues } = useContext(ctx);

  const updateState = () => {
    const a = inputValues;
    a[name] = {
      hour: hourRef.current.value,
      minute: minuteRef.current.value,
      sign: time,
      fullDay: fullDayRef.current.checked,
    };

    if (fullDayRef.current.checked === true) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setInputValues(a);
  };

  const toggle = (e) => {
    e.preventDefault();

    if (time === 'AM') {
      setTime('PM');
    } else if (time === 'PM') {
      setTime('AM');
    }
  };

  return (
    <>
      <div className="time-input" onChange={updateState}>
        <input
          placeholder="Hour"
          ref={hourRef}
          maxLength={2}
          type="number"
          min="0"
          max="12"
          disabled={disabled}
        />
        <p> : </p>
        <input
          placeholder="Minute"
          ref={minuteRef}
          maxLength={2}
          type="number"
          min="0"
          max="59"
          disabled={disabled}
        />

        <button onClick={toggle} disabled={disabled}>
          {time}
        </button>
      </div>

      <br />

      <input
        name="full-day"
        type="checkbox"
        value="full day"
        style={{ marginRight: '10px' }}
        ref={fullDayRef}
        onChange={updateState}
      />
      <label htmlFor="full-day">Full day event</label>
    </>
  );
}
