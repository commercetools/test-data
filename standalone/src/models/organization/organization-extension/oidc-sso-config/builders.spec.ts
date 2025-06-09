import { OidcSsoConfigGraphql } from './index';

describe('OidcSsoConfigGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = OidcSsoConfigGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'OidcSsoConfig',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        isActive: expect.any(Boolean),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
        hasClientSecret: expect.any(Boolean),
      })
    );
  });
});
