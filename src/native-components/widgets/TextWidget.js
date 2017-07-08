import React from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';

function TextWidget(props) {
  return <BaseInput {...props} />;
}

TextWidget.propTypes = {
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  ...BaseInput.propTypes
};
TextWidget.defaultProps = {
  value: ''
};

export default TextWidget;
