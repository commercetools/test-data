import type { SearchKeywords } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpSearchKeywords } from '@commercetools-test-data/graphql-types';

export type TSearchKeywordsRest = SearchKeywords;
export type TSearchKeywordsGraphql = TCtpSearchKeywords;

export type TCreateSearchKeywordsBuilder<
  TSearchKeywordsModel extends TSearchKeywordsRest | TSearchKeywordsGraphql,
> = () => TBuilder<TSearchKeywordsModel>;
