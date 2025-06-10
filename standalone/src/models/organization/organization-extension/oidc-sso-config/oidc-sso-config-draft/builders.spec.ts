import { OidcSsoConfigDraftGraphql } from './index';

describe('OidcSsoConfigDraftGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = OidcSsoConfigDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
      })
    );
  });
});
