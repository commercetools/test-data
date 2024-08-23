import { RestModelBuilder, GraphqlModelBuilder } from './builders';

export * as OrderFromCartDraft from './order-from-cart-draft';
export * as OrderFromQuoteDraft from './order-from-quote-draft';
export * as Order from '.';

export const random = RestModelBuilder;
export { default as presets } from './presets';
export { default as draftPresets } from './order-from-cart-draft/presets';

export * from './types';
export * as constants from './constants';

export const OrderRest = {
  random: RestModelBuilder,
};
export const OrderGraphql = {
  random: GraphqlModelBuilder,
};
