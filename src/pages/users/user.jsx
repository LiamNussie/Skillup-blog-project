import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './user.scss';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const User = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    console.log(loading);

    useEffect(() => {
        const response = axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then(res => console.log(res.data))
        .then(res => setPosts(res.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [])

    const handleRouting = async (id) => {
        await setId(id)
        history.push(`/user/${id}`, {postId: id})
    }

  return <div className='user'>
      <h1>MY BLOG POSTS</h1>

      {loading ? "Loading posts..." : 
          <div className="postlist">
          {posts.slice(0,10).map(({title, id, body}) => {
          return (
                <div onClick={() => handleRouting(id)} className="post" key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
          )
      })}
      </div>}
      



  </div>;
};

export default User;
