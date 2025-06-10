import { PimSearchListViewGraphql } from './index';

describe('PimSearchListView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = PimSearchListViewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        userId: expect.any(String),
        projectKey: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        isActive: true,
        search: null,
        table: null,
        sort: null,
        filters: [],
        expandedRows: [],
        __typename: 'PimSearchListView',
      })
    );
  });
});
