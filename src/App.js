import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import FormComponent from './components/FormComponent';
import './styles/App.css';
import Postfilter from './components/PostFilter';
import Modalwindow from './components/UI/ModalWindow/ModalWindow';
import Unibutton from './components/UI/UniButton';
import { usePosts } from './hooks/usePosts';
import PostsService from './API/PostsService';
import LoaderComponent from './components/UI/LoaderComponent';
import {useFetching} from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const searchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isLoadingPosts, errorPostLoading] = useFetching( async () => {
    const response = await PostsService.getAll();
    setPosts(response);
  })

  useEffect(() => {
    fetchPosts();
  }, []);

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
      { errorPostLoading && <h1 style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>errorPostLoading</h1>}
      { isLoadingPosts 
        ? <LoaderComponent/>
        : <PostList deletePost={deletePost} posts={searchedPosts} title="POSTS List"/>
      }
    </div>
  );
}

export default App;
