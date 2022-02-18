import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import FormComponent from './components/FormComponent';
import './styles/App.css';
import Postfilter from './components/PostFilter';
import Modalwindow from './components/UI/ModalWindow/ModalWindow';
import Unibutton from './components/UI/UniButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'Language'},
    {id: 2, title: 'Swift', description: 'Apple'},
    {id: 3, title: 'Python', description: 'Python'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const deletePost = (deletedPost) => {
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  }

  //Хук для кэширования измененного объека, используется для оптимизации
  const sortedPost = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const searchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()));
  }, [filter.query, sortedPost])

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
