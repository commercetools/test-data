import {
  SearchKeywordGraphql,
  SearchKeywordRest,
  type TSearchKeywordGraphql,
  type TSearchKeywordRest,
} from './index';

function validateRestModel(restModel: TSearchKeywordRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      text: 'hello',
      suggestTokenizer: {
        type: 'whitespace',
      },
    })
  );
}

function validateGraphqlModel(graphqlModel: TSearchKeywordGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      __typename: 'SearchKeyword',
      text: 'hello',
      suggestTokenizer: {
        __typename: 'WhitespaceSuggestTokenizer',
        type: 'whitespace',
      },
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = SearchKeywordRest.random().text('hello').build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = SearchKeywordGraphql.random().text('hello').build();

    validateGraphqlModel(graphqlModel);
  });
});
