import PropTypes from 'prop-types';

export const options = PropTypes.shape({});
export const schema = PropTypes.shape({
  type: PropTypes.oneOf(['object', 'array', 'string']),
  description: PropTypes.string,
  properties: PropTypes.shape({}),
  required: PropTypes.arrayOf(PropTypes.string)
});
export const formContext = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string
});
export const RegistryType = PropTypes.shape({
  fields: PropTypes.shape({}),
  widgets: PropTypes.shape({}),
  definitions: PropTypes.shape({}),
  formContext
});
