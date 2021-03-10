import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Post.css'
const Post = (props) => {
    const {id,title,body}=props.post;
    const history=useHistory();
    const showComments= id =>{
            history.push(`/postId/${id}`);
    }
    return (
        <div className="post-container">
            <strong>{title}</strong>
            <p>{body}</p>
            <button onClick={()=>showComments(id)}>Id {id} Details</button>
            {/* <Link to={`/postId/${id}`}> 
            <button>Id {id} Details</button>
            </Link> */}
        </div>
    );
};

export default Post;