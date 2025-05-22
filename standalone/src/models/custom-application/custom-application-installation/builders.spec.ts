import type { TCustomApplicationInstallationGraphql } from './types';
import { CustomApplicationInstallationGraphql } from './index';

describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationInstallationGraphql.random().buildGraphql<TCustomApplicationInstallationGraphql>();

    expect(graphqlModel).toMatchObject({
      __typename: 'RestrictedCustomApplicationInstallationForOrganization',
      createdAt: expect.any(String),
      id: expect.any(String),
      updatedAt: expect.any(String),
      acceptedPermissions: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'CustomApplicationInstallationPermission',
          name: expect.any(String),
          oAuthScopes: expect.arrayContaining([expect.any(String)]),
        }),
      ]),
      application: expect.objectContaining({
        name: expect.any(String),
        description: expect.any(String),
        url: expect.any(String),
      }),
      installInAllProjects: expect.any(Boolean),
      projects: expect.any(Array),
    });
  });
});
