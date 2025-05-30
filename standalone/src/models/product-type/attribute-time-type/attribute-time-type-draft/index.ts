import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeTimeTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeTimeTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeTimeTypeDraftRest` or `AttributeTimeTypeDraftGraphql` exported models instead of `AttributeTimeTypeDraft`.
 */
export const AttributeTimeTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
