import { GraphqlModelBuilder } from './builders';

describe('OrderDetailView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        id: expect.any(String),
        isActive: true,
        nameAllLocales: [],
        projectKey: expect.any(String),
        table: null,
        updatedAt: expect.any(String),
        userId: expect.any(String),
        __typename: 'OrderDetailView',
      })
    );
  });
});
