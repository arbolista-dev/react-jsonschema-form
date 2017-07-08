import React from 'react';
import {
  View,
  Text,
  Slider
} from 'react-native';
import * as sharedPropTypes from '../types';

const rangeSpec = (schema) => {
  const spec = {};
  if (schema.multipleOf) {
    spec.step = schema.multipleOf;
  }
  if (schema.minimum || schema.minimum === 0) {
    spec.minimumValue = schema.minimum;
  }
  if (schema.maximum || schema.maximum === 0) {
    spec.maximumValue = schema.maximum;
  }
  return spec;
};


const SliderWidget = (props) => {
  const { options, schema, value } = props;
  return (
    <View style={options.containerStyle}>
      <Slider {...props} {...rangeSpec(schema)} />
      <Text style={options.textStyle}>
        {value}
      </Text>
    </View>
  );
};

SliderWidget.propTypes = {
  schema: sharedPropTypes.schema.isRequired,
  options: sharedPropTypes.options.isRequired,
  ...Slider.propTypes
};

export default SliderWidget;
