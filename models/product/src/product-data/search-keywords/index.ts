import { RestModelBuilder, GraphqlModelBuilder } from './builder';

export * from './types';

export const SearchKeywordsRest = {
  random: RestModelBuilder,
};

export const SearchKeywordsGraphql = {
  random: GraphqlModelBuilder,
};
