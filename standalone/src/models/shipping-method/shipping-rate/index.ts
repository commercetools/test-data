import { RestModelBuilder, GraphqlModelBuilder } from './builders';
export * from './types';

export * as ShippingRateDraft from './shipping-rate-draft';
export * as ShippingRatePriceTierDraft from './shipping-rate-price-tier';

// Main Product Tailoring models
export const ShippingRateRest = {
  random: RestModelBuilder,
};

export const ShippingRateGraphql = {
  random: GraphqlModelBuilder,
};
