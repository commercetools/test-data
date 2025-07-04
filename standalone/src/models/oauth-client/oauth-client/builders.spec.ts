import { OAuthClientGraphql } from './index';

describe('OAuthClient Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = OAuthClientGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        id: expect.any(String),
        lastUsedAt: expect.any(String),
        name: expect.any(String),
        ownerId: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'ProjectPermission',
          }),
        ]),
        secret: expect.any(String),
        __typename: 'OAuthClient',
      })
    );
  });
});
