import React from 'react';

const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
}

function SingleLabel(props) {
    return (
        <div
            className="event-label"
            style={{
                backgroundColor: props.color
            }}
        >{props.name}</div>  
    );
}

export default function EventLabel(props) {

    let colors = props.colors || [];

    return (
        <div style={containerStyle}>
            {colors.map((v, i) => {
                return (
                    <SingleLabel
                        color={v.color}
                        name={v.name}
                        key={i} 
                    />
                )
            })}
        </div>
    );
}
