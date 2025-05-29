import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizableTextTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizableTextTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizableTextTypeRest` or `AttributeLocalizableTextTypeGraphql` exported models instead of `AttributeLocalizableTextType`.
 */
export const AttributeLocalizableTextType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
