import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as taxedPricePresets from './presets';
export * from './types';

export const taxedPriceRest = {
  random: RestModelBuilder,
  presets: taxedPricePresets.restPresets,
};

export const taxedPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: taxedPricePresets.graphqlPresets,
};
