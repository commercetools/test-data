import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeDateTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDateTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDateTypeRest` or `AttributeDateTypeGraphql` exported models instead of `AttributeDateType`.
 */
export const AttributeDateType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
