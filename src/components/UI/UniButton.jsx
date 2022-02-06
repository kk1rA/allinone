import React from 'react';
//import { Button } from 'semantic-ui-react';
import styles from '../../styles/ButtonStyle.module.css';

const Unibutton = ({children, ...props}) => {
    return (
        //<Button {...props}>{children}</Button>
        <button className={styles.button} {...props}>{children}</button>
    );
}

export default Unibutton;