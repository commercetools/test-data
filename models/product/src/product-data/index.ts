import {
  CompatProductModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as CategoryOrderHint from './category-order-hint';
export * as SearchKeyword from './search-keyword';
export * as SearchKeywords from './search-keywords';

export const ProductDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductDataRest` or `ProductDataGraphql` exported models instead of `ProductData`.
 */
export const ProductData = {
  random: CompatProductModelBuilder,
  presets: modelPresets.compatPresets,
};
