import * as React from 'react';
import { createRef, useContext } from 'react';

interface Props {
  name: string;
  ctx: React.Context<any>;
}

export default function DateInput({ name, ctx }: Props) {
  const monthRef = createRef<HTMLSelectElement>();
  const dateRef = createRef<HTMLInputElement>();
  const yearRef = createRef<HTMLInputElement>();
  const { inputValues, setInputValues } = useContext(ctx);

  const updateState = () => {
    const a = inputValues;
    a[name] = {
      month: monthRef.current.value,
      date: dateRef.current.value,
      year: yearRef.current.value,
    };

    setInputValues(a);
  };

  return (
    <div className="date-input" onChange={updateState}>
      <select ref={monthRef}>
        <option>Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>

      <input placeholder="Date" ref={dateRef} maxLength={2} type="text" />

      <p>, </p>

      <input placeholder="Year" ref={yearRef} maxLength={4} type="text" />
    </div>
  );
}
