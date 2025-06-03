import type { TCustomApplicationPermissionGraphql } from './types';
import { CustomApplicationPermissionGraphql } from './index';
describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationPermissionGraphql.random().buildGraphql<TCustomApplicationPermissionGraphql>();

    expect(graphqlModel).toMatchObject({
      __typename: 'CustomApplicationPermission',
      name: expect.any(String),
      oAuthScopes: expect.any(Array),
      createdAt: expect.any(String),
      id: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
