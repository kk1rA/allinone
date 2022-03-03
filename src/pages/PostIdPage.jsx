import React from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
import { useState, useEffect } from 'react';
import LoaderComponent from '../components/UI/LoaderComponent'; 

const Postidpage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setcomments] = useState([]);
    const [fetchPostByID, idLoading, error] = useFetching( async () => {
        const response = await PostsService.getPostById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, errorCom] = useFetching( async () => {
        const response = await PostsService.getPostCommentById(params.id);
        setcomments(response.data);
    });

    useEffect(() => {
        fetchPostByID();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>Страница с постом: {params.id}</h1>
            { idLoading
                ? <LoaderComponent/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            { isComLoading
                ? <LoaderComponent/>
                : <div>
                    { comments.map(comm => 
                        <div style={{marginTop: 20, marginLeft: 20}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)
                    }
                  </div>
            }
        </div>
    );
}

export default Postidpage;
