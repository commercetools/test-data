import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatProductModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductCatalogDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductCatalogDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductCatalogDataRest` or `ProductCatalogDataGraphql` exported models instead of `ProductCatalogData`.
 */
export const ProductCatalogData = {
  random: CompatProductModelBuilder,
  presets: modelPresets.compatPresets,
};
