import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeBooleanTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeBooleanTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeBooleanTypeRest` or `AttributeBooleanTypeGraphql` exported models instead of `AttributeBooleanType`.
 */
export const AttributeBooleanType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
