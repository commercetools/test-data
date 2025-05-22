import { fake, type TModelFieldsConfig } from '@/core';
import { SearchKeywordGraphql, SearchKeywordRest } from '../search-keyword';
import type { TSearchKeywordsGraphql, TSearchKeywordsRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TSearchKeywordsRest> = {
  fields: {
    en: fake(() => [SearchKeywordRest.random()]),
    de: fake(() => [SearchKeywordRest.random()]),
    es: fake(() => [SearchKeywordRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TSearchKeywordsGraphql> = {
  fields: {
    __typename: 'SearchKeywords',
    locale: fake((f) => f.helpers.arrayElement(['en', 'de', 'es'])),
    searchKeywords: fake(() => [SearchKeywordGraphql.random()]),
  },
};
