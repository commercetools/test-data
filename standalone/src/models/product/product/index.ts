// export * as ProductDraft from './product-draft';

import {
  CompatProductModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export * from './types';

export const ProductRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductRest` or `ProductGraphql` exported models instead of `Product`.
 */
export const Product = {
  random: CompatProductModelBuilder,
  presets: modelPresets.compatPresets,
  constants,
};
