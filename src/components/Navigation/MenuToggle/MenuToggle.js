import React from 'react';
import styles from './MenuToggle.css';

const MenuToggle = props => {
    const menuClasses = [
        styles.MenuToggle,
        'fas'
    ]

    if (props.isOpen) {
        menuClasses.push('fa-times');
        menuClasses.push(styles.open);
    } else {
        menuClasses.push('fa-bars');
    }

    return (
        <i
            className={menuClasses.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;