import {
  TextInput
} from 'react-native';
import React from 'react';
import * as sharedPropTypes from '../types';

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  const {
    options,
    ...inputProps
  } = props;

  const _onChange = ({ target: { value } }) => props.onChange(value === '' ? options.emptyValue : value);
  return (
    <TextInput
      {...inputProps}
      onChange={_onChange}
      onBlur={inputProps.onBlur && (event => inputProps.onBlur(inputProps.id, event.target.value))}
    />
  );
}

BaseInput.propTypes = {
  options: sharedPropTypes.options.isRequired,
  schema: sharedPropTypes.schema.isRequired,
  formatContext: sharedPropTypes.formContext.isRequired,
  registry: sharedPropTypes.registry.isRequired,
  ...TextInput.props
};

BaseInput.defaultProps = {};

export default BaseInput;
