import { GraphqlModelBuilder, RestModelBuilder } from './builder';
import * as modelPresets from './presets';

export * as CategoryOrderHint from './category-order-hint';
export * as SearchKeyword from './search-keyword';
export * as SearchKeywords from './search-keywords';
export * from './types';

export const ProductDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
