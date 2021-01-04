import React from 'react';

export default function EditButton() {
    return (
        <div className="wd-context-menu context-menu-button" style={{
            backgroundColor: '#53c596'
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                stroke="#eee"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="40px"
                height="40px"
            >
                <path transform="scale(1.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>

            <p>edit</p>
        </div>
    );
}
