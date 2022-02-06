import React from "react";
import Unibutton from "./UI/UniButton";

const PostItem = (props) => {
    return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.description}</div>
        </div>
        <div>
          <Unibutton onClick={() => props.delete(props.post)} title='Delete content'>Delete</Unibutton>
        </div>
      </div>
    )
}

export default PostItem;