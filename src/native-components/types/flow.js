/* @flow */

export type OptionsType = {};
export type SchemaType = {
  type: 'object' | 'array' | 'string',
  description?: string,
  properties?: {},
  required?: Array<string>
};
export type FormContextType = {
  title: string,
  description: string
};
export type RegistryType = {
  fields: {},
  widgets: {},
  definitions: {},
  formContext: FormContextType
};
