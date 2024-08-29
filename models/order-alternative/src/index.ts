import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as draftPresets from './order-from-cart-draft/presets';
import * as presets from './presets';

export * as OrderFromCartDraft from './order-from-cart-draft';
export * as OrderFromQuoteDraft from './order-from-quote-draft';
export * as Order from '.';

export const random = RestModelBuilder;

export * from './types';
export * as constants from './constants';

export const OrderRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
  draftPresets: draftPresets.restPresets,
};
export const OrderGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
  draftPresets: draftPresets.graphqlPresets,
};
