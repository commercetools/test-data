import { RestModelBuilder, GraphqlModelBuilder } from './builder';

export * from './types';

export const SearchKeywordRest = {
  random: RestModelBuilder,
};

export const SearchKeywordGraphql = {
  random: GraphqlModelBuilder,
};
