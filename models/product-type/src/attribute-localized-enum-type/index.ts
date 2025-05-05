import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizedEnumTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizedEnumTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizedEnumTypeRest` or `AttributeLocalizedEnumTypeGraphql` exported models instead of `AttributeLocalizedEnumType`.
 */
export const AttributeLocalizedEnumType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
