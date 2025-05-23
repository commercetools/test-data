import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeNumberTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeNumberTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeNumberTypeRest` or `AttributeNumberTypeGraphql` exported models instead of `AttributeNumberType`.
 */
export const AttributeNumberType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
