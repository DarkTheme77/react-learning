import React from 'react';
import styles from './Backdrop.css';

const Backdrop = props => <div className={styles.Backdrop} onClick={props.onClick}/>

export default Backdrop;