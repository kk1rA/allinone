import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, deletePost}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post, index) => <PostItem delete={deletePost} number={index + 1} post={post} key={post.id} />)}
        </div>
    );
}

export default PostList;