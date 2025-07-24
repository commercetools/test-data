import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as MethodTaxedPricePresets from './presets';
export * from './types';

export const MethodTaxedPriceRest = {
  random: RestModelBuilder,
  presets: MethodTaxedPricePresets.restPresets,
};

export const MethodTaxedPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: MethodTaxedPricePresets.graphqlPresets,
};
