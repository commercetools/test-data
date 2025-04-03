// export * as ProductDraft from './product-draft';

import {
  CompatProductModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './types';
export * as constants from './constants';
export * from './product-draft';

export const ProductRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

export * as Product from '.';
/**
 * @deprecated Use `ProductRest` or `ProductGraphql` exported models instead of `Product`.
 */
export const random = CompatProductModelBuilder;
export const presets = modelPresets.compatPresets;
