import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DirectDiscountPresets from './presets';
export * from './direct-discount-draft';
export * from './types';

export const DirectDiscountRest = {
  random: RestModelBuilder,
  presets: DirectDiscountPresets.restPresets,
};

export const DirectDiscountGraphql = {
  random: GraphqlModelBuilder,
  presets: DirectDiscountPresets.graphqlPresets,
};
