import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './types';

export * as ShippingRateDraft from './shipping-rate-draft';
export * as ShippingRatePriceTierDraft from './shipping-rate-price-tier';

/**
 * @deprecated Use `ShippingRateRest` or `ShippingRateGraphql` exported models instead of `ShippingRate`.
 */
export const ShippingRate = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

export const ShippingRateRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShippingRateGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
