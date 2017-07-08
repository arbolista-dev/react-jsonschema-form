import React from 'react';
import TextWidget from './TextWidget';

function PasswordWidget(props) {
  return <TextWidget {...props} secureTextEntry />;
}

const propTypes = TextWidget.propTypes;
delete propTypes.secureTextEntry;
PasswordWidget.propTypes = propTypes;
PasswordWidget.defaultProps = TextWidget.defaultProps;

export default PasswordWidget;
