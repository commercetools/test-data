import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as presets from './presets';

export * from './order-from-cart-draft';
export * from './order-from-quote-draft';
export * as Order from '.';

export const random = RestModelBuilder;

export * from './types';
export * as constants from './constants';

export const OrderRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};
export const OrderGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};
