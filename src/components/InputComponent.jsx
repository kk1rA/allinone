import React, { useState } from 'react';

const InputComponent = () => {
    const [value, setValue] = useState('input text')

    return (
        <div>
            <h2>Input text is: {value}</h2>
            <input type='text' value={value} onChange={(event)=> setValue(event.target.value)} />
        </div>
    )
}