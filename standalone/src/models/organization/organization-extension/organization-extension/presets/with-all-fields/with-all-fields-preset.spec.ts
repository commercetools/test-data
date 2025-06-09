import { graphqlPreset } from './with-all-fields-preset';

describe('OrganizationExtensionGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'OrganizationExtension',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        organizationId: expect.any(String),
        oidcSsoConfig: expect.objectContaining({
          __typename: 'OidcSsoConfig',
        }),
        applicationsMaintainerContactInformation: expect.objectContaining({
          __typename: 'ContactInformation',
        }),
        registeredApplications: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'RestrictedCustomApplicationForOrganization',
          }),
        ]),
        installedApplications: expect.arrayContaining([
          expect.objectContaining({
            __typename:
              'RestrictedCustomApplicationInstallationForOrganization',
          }),
        ]),
        registeredCustomViews: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomView',
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomViewInstallation',
          }),
        ]),
      })
    );
  });
});
