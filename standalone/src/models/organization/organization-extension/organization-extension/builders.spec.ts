import { OrganizationExtensionGraphql } from './index';

describe('OrganizationExtensionGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = OrganizationExtensionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'OrganizationExtension',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        applicationsMaintainerContactInformation: null,
        oidcSsoConfig: null,
        organizationId: expect.any(String),
        registeredApplications: [],
        installedApplications: [],
        registeredCustomViews: [],
        installedCustomViews: [],
      })
    );
  });
});
