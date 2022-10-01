import React, { useState } from 'react';
import './Card.css';
import moment from 'moment';

export default function Card(props) {
  const [editValue, setEditValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const {
    data: { id, content, created },
    onClick,
    onClose,
    onEdit,
  } = props;

  const onPostEdit = () => {
    setEditMode((prev) => !prev);
  };

  const onPostChanges = (postParams) => {
    onEdit(postParams);
    onPostEdit();
  };

  const onEditInputChange = (e) => setEditValue(e.target.value);

  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">{content}</div>
      <div className="card-created">
        {moment(created).format('DD.MM.YYYY HH:mm:ss')}
      </div>
      {onClose && (
        <div className="card-close" onClick={() => onClose(id)}>
          <i className="material-icons">close</i>
        </div>
      )}
      {onEdit && (
        <div className="card-edit" onClick={() => onPostEdit()}>
          <i className="material-icons">edit</i>
        </div>
      )}
      {editMode && (
        <div className="card-edit-input">
          <input
            type="text"
            name="edit"
            value={editValue}
            onChange={onEditInputChange}
          />
          <button
            type="button"
            onClick={() => onPostChanges({ id: id, content: editValue })}
          >
            done
          </button>
        </div>
      )}
    </div>
  );
}
