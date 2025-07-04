import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const TaxRateDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const TaxRateDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `TaxRateDraftRest` or `TaxRateDraftGraphql` exported models instead of `TaxRateDraft`.
 */
export const TaxRateDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
