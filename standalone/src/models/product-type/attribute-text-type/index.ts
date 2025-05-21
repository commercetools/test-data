import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeTextTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeTextTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeTextTypeRest` or `AttributeTextTypeGraphql` exported models instead of `AttributeTextType`.
 */
export const AttributeTextType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

export * from './types';
