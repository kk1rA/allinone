import React from 'react';
//import { Input } from 'semantic-ui-react';
import classes from '../../styles/TextInput.module.css';

const TextInput = (props) => {
    return (
        //<Input {...props}/>
        <input  className={classes.textInput} {...props}/>
    );
}

export default TextInput;
