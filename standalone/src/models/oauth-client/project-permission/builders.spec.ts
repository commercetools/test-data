import { ProjectPermissionGraphql } from './index';

describe('ProjectPermission Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProjectPermissionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        projectKey: null,
        storeKey: null,
        __typename: 'ProjectPermission',
      })
    );
  });
});
