import type { SearchKeyword } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpSearchKeyword } from '@commercetools-test-data/graphql-types';

export type TSearchKeywordRest = SearchKeyword;
export type TSearchKeywordGraphql = TCtpSearchKeyword;

export type TCreateSearchKeywordBuilder<
  TSearchKeywordModel extends TSearchKeywordRest | TSearchKeywordGraphql,
> = () => TBuilder<TSearchKeywordModel>;
