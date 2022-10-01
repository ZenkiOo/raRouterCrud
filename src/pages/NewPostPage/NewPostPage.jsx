import React, { useState, useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';
import AddForm from '../../components/AddForm/AddForm';

export default function NewPostPage({ history }) {
  const { handlePush } = useContext(PostsContext);

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    handlePush({ content: value });
    history.push('/');
  };

  return (
    <AddForm
      fields={[{ name: 'content', label: 'Создать пост:', value: value }]}
      onChange={(_, value) => setValue(value)}
      onSubmit={handleSubmit}
    />
  );
}
