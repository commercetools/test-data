import { CustomApplicationInstallationGraphql } from './index';

describe('CustomApplicationInstallation', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = CustomApplicationInstallationGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        id: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });
});
