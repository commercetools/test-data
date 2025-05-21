import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeSetTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeSetTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeSetTypeRest` or `AttributeSetTypeGraphql` exported models instead of `AttributeSetType`.
 */
export const AttributeSetType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

export * from './types';
