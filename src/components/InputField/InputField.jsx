import React from 'react';
import PropTypes from 'prop-types';

function InputField(props) {
  const { name, value, label, onChange } = props;

  const handleChange = (evt) => onChange(name, evt.target.value);

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={value} onChange={handleChange} />
    </div>
  );
}

InputField.defaultProps = {
  label: '',
  value: '',
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
