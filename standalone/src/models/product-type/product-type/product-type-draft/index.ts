import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductTypeDraftRest` or `ProductTypeDraftGraphql` exported models instead of `ProductTypeDraft`.
 */
export const ProductTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
