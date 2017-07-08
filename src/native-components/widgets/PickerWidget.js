import React from 'react';
import PropTypes from 'prop-types';
import {
  Picker
} from 'react-native';
import * as sharedPropTypes from '../types';
import { asNumber } from '../../utils';

/**
 * cast value to appropriate type.
 */
function processValue({ type, items }, value) {
  if (value === '') {
    return undefined;
  } else if (
    type === 'array' &&
    items &&
    ['number', 'integer'].includes(items.type)
  ) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }
  return value;
}

const PickerWidget = (props) => {
  const {
    schema,
    options,
    placeholder,
    onValueChange,
    selectedValue,
    ...pickerProps
  } = props;
  const { enumOptions } = options;
  return (
    <Picker
      {...pickerProps}
      selectedValue={selectedValue || ''}
      onValueChange={(value) => {
        onValueChange(processValue(schema, value));
      }}
    >
      {!schema.default &&
        <Picker.Item value="" label={placeholder}>
          {placeholder}
        </Picker.Item>}
      {enumOptions.map(({ value, label }, _i) => (
        <Picker.Item key={value} label={label} value={value} />
      ))}
    </Picker>
  );
};

PickerWidget.defaultProps = {
  placeholder: ''
};

PickerWidget.propTypes = {
  schema: sharedPropTypes.schema.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.shape({
    enumOptions: PropTypes.arrayOf({
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  }).isRequired,
  ...Picker.propTypes
};

export default PickerWidget;
