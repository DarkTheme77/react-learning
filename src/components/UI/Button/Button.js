import React from 'react';
import styles from './Button.css';

const Button = props => {
    const btnClasses = [
        styles.Button,
        styles[props.type]
    ]

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={btnClasses.join(' ')}
        >{props.children}</button>
    )
}

export default Button;