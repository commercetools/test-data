import { RestModelBuilder, GraphqlModelBuilder } from './builders';

export * from './types';

export const SearchKeywordRest = {
  random: RestModelBuilder,
};

export const SearchKeywordGraphql = {
  random: GraphqlModelBuilder,
};
