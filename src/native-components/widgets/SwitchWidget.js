import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  View,
  Text
} from 'react-native';
import * as sharedPropTypes from '../types';
// import DescriptionField from '../fields/DescriptionField';

const SwitchWidget = (props) => {
  const {
    options,
    label,
    ...switchProps
  } = props;
  return (
    <View style={options.containerStyle}>
      {// schema.description &&
        //  <DescriptionField description={schema.description} />
      }
      <Switch {...switchProps} />
      <Text style={options.textStyle}>
        {label}
      </Text>
    </View>
  );
};

SwitchWidget.defaultProps = {};

SwitchWidget.propTypes = {
  schema: sharedPropTypes.schema.isRequired,
  options: sharedPropTypes.options.isRequired,
  label: PropTypes.string.isRequired,
  ...Switch.propTypes
};

export default SwitchWidget;
