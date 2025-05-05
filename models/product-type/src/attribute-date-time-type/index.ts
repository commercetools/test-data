import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeDateTimeTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDateTimeTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDateTimeTypeRest` or `AttributeDateTimeTypeGraphql` exported models instead of `AttributeDateTimeType`.
 */
export const AttributeDateTimeType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
