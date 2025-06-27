import { VariantPricesListViewGraphql } from './index';

describe('VariantPricesListView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = VariantPricesListViewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        projectKey: expect.any(String),
        updatedAt: expect.any(String),
        userId: expect.any(String),
        visibleColumns: [],
        __typename: 'VariantPricesListView',
      })
    );
  });
});
