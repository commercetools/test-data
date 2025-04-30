import { GraphqlModelBuilder, RestModelBuilder } from './builders';

export * from './types';

export const CategoryOrderHintRest = {
  random: RestModelBuilder,
};

export const CategoryOrderHintGraphql = {
  random: GraphqlModelBuilder,
};
