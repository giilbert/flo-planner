import React, { createRef, useContext, } from 'react';

export default function DateInput({ name, ctx }) {
    const monthRef = createRef();
    const dateRef = createRef();
    const yearRef = createRef();
    const { inputValues, setInputValues } = useContext(ctx);

    const updateState = () => {
        const a = inputValues;
        a[name] = {
            month: monthRef.current.value,
            date: dateRef.current.value,
            year: yearRef.current.value,
        };

        setInputValues(a)
    }

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

            <input placeholder="Date" ref={dateRef} maxLength="2" type="text" />

            <p>, </p>

            <input placeholder="Year" ref={yearRef} maxLength="4" type="text" />
        </div>
    )
}