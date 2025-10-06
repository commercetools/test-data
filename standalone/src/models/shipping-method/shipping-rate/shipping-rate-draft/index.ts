import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from '../types';

export const ShippingRateDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShippingRateDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ShippingRateDraftRest` or `ShippingRateDraftGraphql` exported models instead of `ShippingRateDraft`.
 */
export const ShippingRateDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
