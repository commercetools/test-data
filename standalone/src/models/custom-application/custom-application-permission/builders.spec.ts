import { CustomApplicationPermissionGraphql } from './index';
describe('CustomApplicationPermission', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = CustomApplicationPermissionGraphql.random().build();

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
