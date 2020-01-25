import React from 'react';

const Light = props => {

    const lightStyle = {
        borderRadius: '50%',
        backgroundColor: props.color,
        height: '50px',
        width: '50px',
        opacity: props.lit ? '1' : '.2'
    }

    return (
        <div style={lightStyle}></div>
    );
}


export default Light;