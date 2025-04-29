import React, { useState } from 'react';

function Post() {
  const [posts, setPosts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const agregarPost = () => {
    const nuevoPost = { id: nextId, activo: false };
    setPosts([...posts, nuevoPost]);
    setNextId(nextId + 1);
  };

  const toggleActivo = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, activo: !post.activo } : post
    ));
  };

  const eliminarPost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      <button onClick={agregarPost}>Agregar nuevo Post</button>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>Post ID {post.id}</h2>
          {post.activo && <h3>Renderizado condicional en React</h3>}
          <button onClick={() => toggleActivo(post.id)}>
            {post.activo ? 'Inactivar' : 'Activar'}
          </button>
          <button onClick={() => eliminarPost(post.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
}

export default Post;
