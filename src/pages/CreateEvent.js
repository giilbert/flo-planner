import React, { createContext, useContext } from 'react';

import '../css/CreateEvent.css'

const FormContext = createContext({});

export default function CreateEvent() {

    const onChange = e => {

    }

    return (
        <div className="create-event">
            <main>
                <h1>Create Event</h1>

                <FormContext.Provider value={{ onChange }}>
                    <Input name="Title" placeholder="Doctor's appointment" />
                </FormContext.Provider>
            </main>
        </div>
    )
}

function Input({ name, placeholder }) {
    const form = useContext(FormContext);


    return (
        <div class="input-field">
            <label for={name}>{name}<br /></label>
            <input
                name={name}
                autoCorrect="off"
                spellCheck="false"
                placeholder={placeholder}
            ></input>
            <p class="description">make it ✨meaningful✨</p>
        </div>
    )
}