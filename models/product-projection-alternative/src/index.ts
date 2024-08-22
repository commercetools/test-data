import { GraphqlModelBuilder, RestModelBuilder } from './builders';

export { default as presets } from './presets';

export const ProductProjectionRest = {
  random: RestModelBuilder,
};
export const ProductProjectionGraphql = {
  random: GraphqlModelBuilder,
};

export const ProductProjection = {
  rest: RestModelBuilder,
  graphql: GraphqlModelBuilder,
};
export default ProductProjection;
export * from './types';
