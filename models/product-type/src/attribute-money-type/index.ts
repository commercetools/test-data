import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeMoneyTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeMoneyTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeMoneyTypeRest` or `AttributeMoneyTypeGraphql` exported models instead of `AttributeMoneyType`.
 */
export const AttributeMoneyType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
