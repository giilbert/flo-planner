import React, { createContext, createRef, useContext, useState } from 'react';

import '../css/CreateEvent.css'

const FormContext = createContext({});

export default function CreateEvent() {
    const [inputValues, setInputValues] = useState({});

    const onChange = e => {

    }

    const onSubmit = e => {
        e.preventDefault();

        console.log(inputValues)
    }

    return (
        <div className="create-event">
            <main>
                <h1>Create Event</h1>
                <FormContext.Provider value={{
                    inputValues,
                    setInputValues
                }}>
                    <form onChange={onChange} onSubmit={onSubmit}>
                        <Input name="title" placeholder="Doctor's appointment" description="Make it ✨meaningful✨" />
                        <Input name="description" placeholder="Flu vaccine" type="textarea" />
                        <Input name="date" type="date" />
                        <Input name="time" type="time" />
                        <button>Create</button>
                    </form>
                </FormContext.Provider>
            </main>
        </div>
    )
}

function Input({ name, placeholder, description, type = "text" }) {
    const { inputValues, setInputValues } = useContext(FormContext);

    const updateState = e => {
        const a = inputValues;
        a[name] = e.target.value;

        setInputValues(a)
    }

    const nameString = name[0].toUpperCase() + name.slice(1).toLowerCase();

    let input;
    switch (type) {
        case 'text':
            input = (
                <input
                    name={name}
                    autoCorrect="off"
                    spellCheck="false"
                    placeholder={placeholder}
                    autoComplete='off'
                    onChange={updateState}
                ></input>
            )
            break;
        case 'textarea':
            input = (
                <textarea
                    name={name}
                    autoCorrect="off"
                    spellCheck="false"
                    placeholder={placeholder}
                    autoComplete='off'
                    onChange={updateState}
                ></textarea>
            )
            break;
        case 'date':
            input = <DateInput name={name} />
            break;
        case 'time':
            input = <input
                type="time"
                onChange={updateState}
            />
            break;
    }

    return (
        <div className="input-field">
            <label htmlFor={name}>{nameString}<br /></label>
            {input}
            <p className="description">{description}</p>
        </div>
    )
}

const DateInput = ({ name }) => {
    const monthRef = createRef();
    const dateRef = createRef();
    const yearRef = createRef();
    const { inputValues, setInputValues } = useContext(FormContext);

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

            <input placeholder="Date" ref={dateRef} maxLength="2" />

            <p>, </p>

            <input placeholder="Year" ref={yearRef} maxLength="4" />
        </div>
    )
}