import { CustomApplicationInstallationPermissionGraphql } from './index';
describe('CustomApplicationInstallationPermission', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel =
      CustomApplicationInstallationPermissionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        oAuthScopes: expect.any(Array),
        createdAt: expect.any(String),
        id: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });
});
