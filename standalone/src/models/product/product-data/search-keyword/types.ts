import type { SearchKeyword } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpSearchKeyword } from '@/graphql-types';

export type TSearchKeywordRest = SearchKeyword;
export type TSearchKeywordGraphql = TCtpSearchKeyword;

export type TCreateSearchKeywordBuilder<
  TSearchKeywordModel extends TSearchKeywordRest | TSearchKeywordGraphql,
> = () => TBuilder<TSearchKeywordModel>;
