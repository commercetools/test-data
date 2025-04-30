import { RestModelBuilder, GraphqlModelBuilder } from './builders';

export * from './types';

export const SearchKeywordsRest = {
  random: RestModelBuilder,
};

export const SearchKeywordsGraphql = {
  random: GraphqlModelBuilder,
};
