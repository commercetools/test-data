import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const PriceDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const PriceDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `PriceDraftRest` or `PriceDraftGraphql` exported models instead of `PriceDraft`.
 */
export const PriceDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
