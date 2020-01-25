import React, { useState, useEffect } from 'react';
import Light from './Light'

const boxStyle = {
    margin: 'auto',
    marginTop: '20px',
    height: '200px',
    width: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '2px solid black',
    backgroundColor: 'grey'
}

const Box = () => {

    const [lightState, setLightState] = useState({
        green: true,
        yellow: false,
        red: false
    })

    useEffect(() => {

        let time = Date.now();
        let timePassed

        let timeInt = setInterval(() => {
            timePassed = Date.now() - time;

            if (timePassed >= 4000 && lightState.green) {
                setLightState({ green: !lightState.green, yellow: !lightState.yellow })
            }

            if (timePassed >= 1000 && lightState.yellow) {
                setLightState({ yellow: !lightState.yellow, red: !lightState.red })
            }

            if (timePassed >= 5000 && lightState.red) {
                setLightState({ red: !lightState.red, green: !lightState.green })
            }
        }, 100)

        return () => (clearInterval(timeInt))

    }, [lightState.green, lightState.red, lightState.yellow])

    const lights = ['red', 'yellow', 'green'].map(color => {
        return <Light key={color} color={color} lit={lightState[color]} />
    })

    return (
        <div style={boxStyle}>
            {lights}
        </div>
    )
}

export default Box; 