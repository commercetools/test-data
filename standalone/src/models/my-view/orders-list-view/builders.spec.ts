import { OrdersListViewGraphql } from './index';

describe('OrdersListView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = OrdersListViewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        filters: [],
        id: expect.any(String),
        isActive: true,
        nameAllLocales: null,
        projectKey: expect.any(String),
        search: null,
        searchParams: null,
        sort: null,
        table: null,
        updatedAt: expect.any(String),
        userId: expect.any(String),
        __typename: 'OrdersListView',
      })
    );
  });
});
