import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeMoneyTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeMoneyTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeMoneyTypeDraftRest` or `AttributeMoneyTypeDraftGraphql` exported models instead of `AttributeMoneyTypeDraft`.
 */
export const AttributeMoneyTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
