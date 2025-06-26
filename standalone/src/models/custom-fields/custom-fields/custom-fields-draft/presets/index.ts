import * as withAllFields from './with-all-field-types';
import * as withStringField from './with-string-field';

export const restPresets = {
  withAllFields: withAllFields.restPreset,
  withStringField: withStringField.restPreset,
};

export const graphqlPresets = {
  withAllFields: withAllFields.graphqlPreset,
  withStringField: withStringField.graphqlPreset,
};
