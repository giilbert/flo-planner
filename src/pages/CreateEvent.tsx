import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import DateInput from '../components/DateInput';
import TimeInput from '../components/TimeInput';
import { createEvent as validate } from '../utils/validateForm';
import { addEvent } from '../utils/events';

import '../css/CreateEvent.css';

interface InputDate {
  year: number;
  month: string;
  date: number;
}

interface InputTime {
  hour: number;
  minute: number;
  fullDay: boolean;
}

interface InputValues {
  title?: string;
  description?: string;
  date?: InputDate;
  time?: InputTime;
}

const FormContext = createContext<{
  inputValues?: InputValues;
  setInputValues?: React.Dispatch<React.SetStateAction<InputValues>>;
  errors?: {};
}>({});

export default function CreateEvent() {
  const [inputValues, setInputValues] = useState<InputValues>({});
  const [errors, setErrors] = useState({});
  const [willRedirect, setRedirect] = useState(false);

  const onChange = (e) => {
    setErrors({});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validate(inputValues);

    if (error === false) {
      const data = inputValues;
      const date = toTimestamp(data.date, data.time);

      addEvent({
        title: data.title,
        description: data.description,
        timestamp: date,
      });

      setRedirect(true);
    } else {
      setErrors(error);
    }
  };

  return (
    <div className="create-event">
      <main>
        <h1>Create Event</h1>
        <FormContext.Provider
          value={{
            inputValues,
            setInputValues,
            errors,
          }}
        >
          <form onChange={onChange} onSubmit={onSubmit}>
            <Input
              name="title"
              placeholder="Doctor's appointment"
              description="Make it ✨meaningful✨"
            />
            <Input
              name="description"
              placeholder="Flu vaccine"
              type="textarea"
            />
            <Input name="date" type="date" />
            <Input name="time" type="time" />
            <button>Create</button>
          </form>
        </FormContext.Provider>
      </main>

      {willRedirect ? <Redirect to="/" /> : null}
    </div>
  );
}

interface InputProps {
  name?: string;
  placeholder?: string;
  description?: string;
  type?: 'text' | 'textarea' | 'date' | 'time';
}

function Input({ name, placeholder, description, type = 'text' }: InputProps) {
  const { inputValues, setInputValues, errors } = useContext(FormContext);

  const updateState = (e) => {
    const a = inputValues;
    a[name] = e.target.value;

    setInputValues(a);
  };

  const nameString = name[0].toUpperCase() + name.slice(1).toLowerCase();

  let input;
  switch (type) {
    case 'text':
      input = (
        <input
          name={name}
          type="text"
          autoCorrect="off"
          spellCheck="false"
          placeholder={placeholder}
          autoComplete="off"
          onChange={updateState}
        ></input>
      );
      break;
    case 'textarea':
      input = (
        <textarea
          name={name}
          autoCorrect="off"
          spellCheck="false"
          placeholder={placeholder}
          autoComplete="off"
          onChange={updateState}
        ></textarea>
      );
      break;
    case 'date':
      input = <DateInput name={name} ctx={FormContext} />;
      break;
    case 'time':
      input = <TimeInput name={name} ctx={FormContext} />;
      break;
  }

  return (
    <div className="input-field">
      <label htmlFor={name}>
        {nameString}
        <br />
      </label>
      {input}

      <ol>
        {errors[name]?.map((v, i) => {
          return (
            <li key={i} className="error">
              {v}
            </li>
          );
        })}
      </ol>

      <p className="description">{description}</p>
    </div>
  );
}

const toTimestamp = (
  { year, month, date }: InputDate,
  { hour, minute, fullDay }: InputTime
) => {
  let monthInt = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ].findIndex((v) => v === month);

  let newHour = fullDay ? hour + 12 : hour;

  return new Date(year, monthInt, date, newHour, minute).getTime();
};
