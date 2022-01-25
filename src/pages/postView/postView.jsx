import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostView = (props) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(props.location.state.postId);

    const id = props.location.state.postId;

    useEffect(() => {
        const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setPost(res.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [])
  return <div className='post-view'>
      {loading ? "loading single post" :
          <div className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
        </div>}
  </div>;
};

export default PostView;
