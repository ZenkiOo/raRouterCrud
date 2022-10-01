import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import './AddForm.css';

export default function AddForm(props) {
  const { fields, submitBtnText, onSubmit, onChange } = props;

  const handleChange = (name, value) => onChange(name, value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {fields.map((o) => (
        <InputField {...o} onChange={handleChange} key={o.name} />
      ))}
      <button type="submit">{submitBtnText}</button>
    </form>
  );
}

AddForm.defaultProps = {
  fields: [],
  submitBtnText: 'Добавить',
};

AddForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  submitBtnText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
