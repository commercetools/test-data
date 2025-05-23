import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizedEnumValueRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizedEnumValueGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizedEnumValueRest` or `AttributeLocalizedEnumValueGraphql` exported models instead of `AttributeLocalizedEnumValue`.
 */
export const AttributeLocalizedEnumValue = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
