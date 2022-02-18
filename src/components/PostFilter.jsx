import React from 'react';
import SelectComponent from './UI/select/SelectComponent';
import TextInput from './UI/TextInput';

const Postfilter = ({filter, setFilter}) => {
    return (
        <div>
          <TextInput placeholder='Поиск...' 
            value={filter.query} 
            onChange={ e => setFilter({...filter, query: e.target.value})}/>
          <SelectComponent
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Sort'
            options={[
              {value: 'title', name: 'By title'},
              {value: 'description', name: 'By description'},
            ]}
          />
        </div>
    );
}

export default Postfilter;
