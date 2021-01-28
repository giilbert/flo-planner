import React, { createContext, useContext, useState } from 'react';

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
                        <Input name="description" placeholder="Flu vaccine" />
                    </form>
                </FormContext.Provider>
            </main>
        </div>
    )
}

function Input({ name, placeholder, description }) {
    const { inputValues, setInputValues } = useContext(FormContext);

    const updateState = e => {
        const a = inputValues;
        a[name] = e.target.value;

        setInputValues(a)
    }

    const nameString = name[0].toUpperCase() + name.slice(1).toLowerCase();

    return (
        <div className="input-field">
            <label htmlFor={name}>{nameString}<br /></label>
            <input
                name={name}
                autoCorrect="off"
                spellCheck="false"
                placeholder={placeholder}
                autoComplete='off'
                onChange={updateState}
            ></input>
            <p className="description">{description}</p>
        </div>
    )
}