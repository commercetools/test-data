import { BusinessUnitsListViewGraphql } from './index';

describe('BusinessUnitsListView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = BusinessUnitsListViewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        filters: [],
        id: expect.any(String),
        isActive: true,
        nameAllLocales: null,
        userId: expect.any(String),
        projectKey: expect.any(String),
        sort: null,
        table: null,
        __typename: 'BusinessUnitsListView',
      })
    );
  });
});
