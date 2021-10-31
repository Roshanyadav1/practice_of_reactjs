import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1)

const handleClick=()=>{
    setIdFromBtn(id);
}

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtn]);

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClick}>Fetch data</button>
        <div>
            {post.title}
        </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
