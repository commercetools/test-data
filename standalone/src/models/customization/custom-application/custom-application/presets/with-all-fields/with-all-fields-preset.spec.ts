import { CustomApplicationStatus } from '../../constants';
import { graphqlPreset } from './with-all-fields-preset';

describe('CustomApplicationGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = graphqlPreset().build();

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
        permissions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomApplicationPermission',
          }),
        ]),
        mainMenuLink: expect.objectContaining({
          __typename: 'CustomApplicationMenuLink',
        }),
        submenuLinks: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomApplicationSubmenuLink',
          }),
        ]),
        deployments: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomApplicationDeploymentPreview',
          }),
        ]),
      })
    );
  });
});
