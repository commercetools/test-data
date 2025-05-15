import { GraphqlModelBuilder } from './builders';
import * as ProductOfSelectionPresets from './presets';
export * from '../types';

export const ProductOfSelectionGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductOfSelectionPresets.graphqlPresets,
};
