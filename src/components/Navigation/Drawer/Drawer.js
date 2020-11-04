import React, { Component } from 'react';
import styles from './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [1,2,3];

class Drawer extends Component {
    renderLinks () {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#">Link {link}</a>
                </li>
            )
        })
    }

    render() {
        const drawerClasses = [styles.Drawer];

        if (!this.props.isOpen) {
            drawerClasses.push(styles.close);
        }

        return (
            <>
                <nav className={drawerClasses.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen && <Backdrop onClick={this.props.onClose} /> }
            </>
        )
    }
}

export default Drawer;