import { fake, type TModelFieldsConfig } from '../../../../core';
import type { TSearchKeywordGraphql, TSearchKeywordRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TSearchKeywordRest> = {
  fields: {
    suggestTokenizer: fake(() => ({
      type: 'whitespace',
    })),
    text: fake((f) => f.lorem.word()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TSearchKeywordGraphql> = {
  fields: {
    __typename: 'SearchKeyword',
    suggestTokenizer: fake(() => ({
      __typename: 'WhitespaceSuggestTokenizer',
      type: 'whitespace',
    })),
    text: fake((f) => f.lorem.word()),
  },
};
