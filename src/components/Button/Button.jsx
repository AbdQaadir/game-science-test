import React from 'react'

import './Button.css';

const Button = ({title, fetchDice})  => {
    return (
        <button onClick={fetchDice} id="roll-dice">
           {title}
        </button>
    )
}

export default Button
