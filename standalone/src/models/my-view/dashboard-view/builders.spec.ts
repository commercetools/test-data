import { GraphqlModelBuilder } from './builders';

describe('DashboardView Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        currencyCode: null,
        id: expect.any(String),
        isActive: true,
        layout: null,
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedField',
          }),
        ]),
        projectKey: expect.any(String),
        timeZone: null,
        updatedAt: expect.any(String),
        userId: expect.any(String),
        __typename: 'DashboardView',
      })
    );
  });
});
