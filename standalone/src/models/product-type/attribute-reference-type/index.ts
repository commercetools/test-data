import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const AttributeReferenceTypeRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeReferenceTypeGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeReferenceTypeRest` or `AttributeReferenceTypeGraphql` exported models instead of `AttributeReferenceType`.
 */
export const AttributeReferenceType = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
