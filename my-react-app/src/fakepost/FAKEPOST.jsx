import React, { useState } from 'react';

const FAKEPOST = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>FAKE POSTS</h1>
      <button onClick={fetchPosts}>Fetch Fake Posts</button>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FAKEPOST;
