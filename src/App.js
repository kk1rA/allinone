import React, { useState } from 'react';
import PostList from './components/PostList';
import FormComponent from './components/FormComponent';
import SelectComponent from './components/UI/select/SelectComponent';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'its a programming language'},
    {id: 2, title: 'Python', description: 'its a programming language'},
    {id: 3, title: 'Swift', description: 'its a programming language'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (deletedPost) => {
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  }

  return (
    <div className="App">
      <FormComponent create={createPost}/>
      <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
      <SelectComponent/>
      {posts.length !==0
        ? <PostList deletePost={deletePost} posts={posts} title="POSTS List"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
