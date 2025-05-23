import { GraphqlModelBuilder } from './builders';
import * as ProductOfSelectionPresets from './presets';
export * from './types';

// This model only exists in the GrahpQL API and that's why there's no REST version of it.
export const ProductOfSelectionGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductOfSelectionPresets.graphqlPresets,
};
