import { CustomApplicationGraphql } from './index';

describe('CustomApplicationGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = CustomApplicationGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'RestrictedCustomApplicationForOrganization',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        url: expect.any(String),
        name: expect.any(String),
        entryPointUriPath: expect.any(String),
        icon: expect.any(String),
        permissions: expect.any(Array),
        mainMenuLink: expect.any(Object),
        submenuLinks: expect.any(Array),
        deployments: expect.any(Array),
      })
    );
  });
});
