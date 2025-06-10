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
        clientSecret: null,
        isActive: expect.any(Boolean),
        logoutUrl: null,
        sessionTokenExpTimeSeconds: null,
        teamIdForNewUsers: null,
        hasClientSecret: false,
      })
    );
  });
});
