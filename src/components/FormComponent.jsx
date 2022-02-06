import React, { useState } from 'react';
import Unibutton from './UI/UniButton';
import TextInput from './UI/TextInput';
//import styles from '../styles/FormComponent.module.css'

const FormComponent = ({create}) => {
    const defaultPostValue = {title: '', description: ''};
    const [post, setPost] = useState(defaultPostValue);
    
    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        };
        create(newPost);
        setPost(defaultPostValue);
    } 

    return (
      <form style={{border: '2px solid teal', padding: '5px 15px', marginTop: '15px', marginBottom: '15px'}}>
        <TextInput 
          type='text'
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          //icon='tags' iconPosition='left' label={{ tag: true, content: 'Add ' }} labelPosition='right'
          placeholder='Название поста'
          />
        <TextInput 
        type='text'
        value={post.description}
        onChange={event => setPost({...post, description: event.target.value})}
        //label={{ icon: 'asterisk' }} labelPosition='right corner' 
        placeholder='Описание поста'
        />
        <Unibutton type='submit' title='Add content' onClick={addNewPost}>Add content</Unibutton>
      </form>
    );
}

export default FormComponent;
