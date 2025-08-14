import { QuotesListViewGraphql } from './index';

describe('QuotesListView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = QuotesListViewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        id: expect.any(String),
        isActive: null,
        nameAllLocales: null,
        projectKey: expect.any(String),
        search: null,
        sort: null,
        sortQuoteRequests: null,
        sortQuotes: null,
        sortStagedQuotes: null,
        updatedAt: expect.any(String),
        userId: expect.any(String),
        __typename: 'QuotesListView',
      })
    );
  });
});
