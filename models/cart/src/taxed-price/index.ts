import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as taxedPricePresets from './presets';
export * from './types';

export const TaxedPriceRest = {
  random: RestModelBuilder,
  presets: taxedPricePresets.restPresets,
};

export const TaxedPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: taxedPricePresets.graphqlPresets,
};
