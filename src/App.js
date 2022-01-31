import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: 'JavaScript', description: 'its a programming language'},
    {id: 2, title: 'Python', description: 'its a programming language'},
    {id: 3, title: 'Cat', description: 'its a programming language'},
    {id: 4, title: 'C++', description: 'its a programming language'},
    {id: 5, title: 'Kotlin', description: 'its a programming language'},
    {id: 6, title: 'Swift', description: 'its a programming language'},
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание'/>
        <button>Add</button>
      </form>
      <PostList posts={posts} title="POSTS List"/>
    </div>
  );
}

export default App;
