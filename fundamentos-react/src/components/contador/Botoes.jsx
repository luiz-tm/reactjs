import React from 'react'

export default function Display(props) {
    return (
        <div>
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    )
}