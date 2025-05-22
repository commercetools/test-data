import type { TCustomApplicationInstallationPermissionGraphql } from './types';
import { CustomApplicationInstallationPermissionGraphql } from './index';

describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationInstallationPermissionGraphql.random().buildGraphql<TCustomApplicationInstallationPermissionGraphql>();

    expect(graphqlModel).toMatchObject({
      name: expect.any(String),
      oAuthScopes: expect.arrayContaining([expect.any(String)]),
      createdAt: expect.any(String),
      id: expect.any(String),
      updatedAt: expect.any(String),
      __typename: 'CustomApplicationInstallationPermission',
    });
  });
});
