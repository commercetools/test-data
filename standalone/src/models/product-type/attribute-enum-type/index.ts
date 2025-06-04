import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeEnumTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeEnumTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeEnumTypeRest` or `AttributeEnumTypeGraphql` exported models instead of `AttributeEnumType`.
 */
export const AttributeEnumType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
