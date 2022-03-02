import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import FormComponent from './components/FormComponent';
import './styles/App.css';
import Postfilter from './components/PostFilter';
import Modalwindow from './components/UI/ModalWindow/ModalWindow';
import Unibutton from './components/UI/UniButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'Language'},
    {id: 2, title: 'Swift', description: 'Apple'},
    {id: 3, title: 'Python', description: 'Python'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const searchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const deletePost = (deletedPost) => {
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  }

  return (
    <div className="App">
      <Unibutton onClick={() => setModal(true)}>
        Создать пост
      </Unibutton>
      <Modalwindow visible={modal} setVisible={setModal}>
        <FormComponent create={createPost}/>
      </Modalwindow>
      <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
      <Postfilter filter={filter} setFilter={setFilter}/>
      <PostList deletePost={deletePost} posts={searchedPosts} title="POSTS List"/>
    </div>
  );
}

export default App;
