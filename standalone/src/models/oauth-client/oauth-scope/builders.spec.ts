import { scopes } from './constants';
import { OAuthScopeGraphql } from './index';

describe('OAuthScope Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = OAuthScopeGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.stringFromArray(Object.values(scopes)),
        __typename: 'SupportedOAuthScopeForOAuthClient',
      })
    );
  });
});
