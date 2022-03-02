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
import { getPageCount } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const searchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setlimit] = useState(10);
  const [page, setpage] = useState(1);

  const [fetchPosts, isLoadingPosts, errorPostLoading] = useFetching( async () => {
    const response = await PostsService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));

  })

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const deletePost = (deletedPost) => {
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  }

  const changePage = (page) => {
    setpage(page);
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
