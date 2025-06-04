import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeTimeTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeTimeTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeTimeTypeRest` or `AttributeTimeTypeGraphql` exported models instead of `AttributeTimeType`.
 */
export const AttributeTimeType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
