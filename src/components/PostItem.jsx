import React from "react";
import { useNavigate } from "react-router-dom";
import Unibutton from "./UI/UniButton";

const PostItem = (props) => {
  const router = useNavigate();
    return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div>
          <Unibutton onClick={() => router(`/posts/${props.post.id}`)} title='Delete content'>Open</Unibutton>
          <Unibutton onClick={() => props.delete(props.post)} title='Delete content'>Delete</Unibutton>
        </div>
      </div>
    )
}

export default PostItem;