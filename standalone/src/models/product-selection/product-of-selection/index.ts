import { GraphqlModelBuilder } from './builders';
import * as ProductOfSelectionPresets from './presets';
export * from '../types';

// We only export the GraphQL model for product-of-selection, as the REST model is not used in the current implementation.
export const ProductOfSelectionGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductOfSelectionPresets.graphqlPresets,
};
