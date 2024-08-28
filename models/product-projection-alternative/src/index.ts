import { GraphqlModelBuilder, RestModelBuilder } from './builders';

import { restPresets, graphqlPresets } from './presets';

export const ProductProjectionRest = {
  random: RestModelBuilder,
  presets: restPresets,
};
export const ProductProjectionGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

export const ProductProjection = {
  rest: RestModelBuilder,
  graphql: GraphqlModelBuilder,
};
export default ProductProjection;
export * from './types';
