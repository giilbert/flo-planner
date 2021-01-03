import React, { Fragment } from 'react';

export default function DeleteButtonSVG() {
    return (
        <div className="wd-context-menu context-menu-button" style={{
            backgroundColor: '#f55a5a'
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                stroke="#ddd"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="40px"
                height="40px"
            >
                <line x1="34" y1="6" x2="6" y2="34"></line>
                <line x1="6" y1="6" x2="34" y2="34"></line>
            </svg>
            <p>delete</p>
        </div>
    );
}
