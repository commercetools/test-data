import { CustomApplicationStatus } from './constants';
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
        status: expect.stringFromArray(Object.values(CustomApplicationStatus)),
        name: expect.any(String),
        description: expect.any(String),
        url: expect.any(String),
        entryPointUriPath: expect.any(String),
        icon: expect.any(String),
        permissions: [],
        mainMenuLink: expect.objectContaining({
          __typename: 'CustomApplicationMenuLink',
        }),
        submenuLinks: [],
        deployments: [],
      })
    );
  });
});
