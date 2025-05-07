import { SearchKeywordGraphql, SearchKeywordRest } from '../search-keyword';
import type { TSearchKeywordsGraphql, TSearchKeywordsRest } from './types';
import { SearchKeywordsGraphql, SearchKeywordsRest } from './index';

function validateRestModel(restModel: TSearchKeywordsRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      en: expect.arrayContaining([
        expect.objectContaining({
          text: 'hello',
          suggestTokenizer: {
            type: 'whitespace',
          },
        }),
      ]),
    })
  );
}

function validateGraphqlModel(graphqlModel: TSearchKeywordsGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      __typename: 'SearchKeywords',
      locale: 'en',
      searchKeywords: expect.arrayContaining([
        expect.objectContaining({
          text: 'hello',
          suggestTokenizer: {
            __typename: 'WhitespaceSuggestTokenizer',
            type: 'whitespace',
          },
        }),
      ]),
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = SearchKeywordsRest.random()
      .en([SearchKeywordRest.random().text('hello')])
      .build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = SearchKeywordsGraphql.random()
      .locale('en')
      .searchKeywords([SearchKeywordGraphql.random().text('hello')])
      .build();

    validateGraphqlModel(graphqlModel);
  });
});
