import React, { useState, useContext, useEffect } from 'react';
import PostsContext from '../../contexts/PostsContext';
import Card from '../../components/Card/Card';
import Page404 from '../../pages/Page404/Page404';

export default function ViewPostPage({ match, history }) {
  const { posts, handleRemove, handleEdit, editMode } =
    useContext(PostsContext);
  const { id } = match.params;

  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) setPost(posts.find((o) => String(o.id) === id));
    return () => {};
  }, [posts, id]);

  const handleClose = () => {
    handleRemove(id);
    history.push('/');
  };

  return (
    (post && (
      <Card data={post} onClose={handleClose} onEdit={handleEdit} />
    )) || <Page404 />
  );
}
