import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as TaxedItemPricePresets from './presets';
export * from './types';

export const TaxedItemPriceRest = {
  random: RestModelBuilder,
  presets: TaxedItemPricePresets.restPresets,
};

export const TaxedItemPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: TaxedItemPricePresets.graphqlPresets,
};
