import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsRestrictedCustomApplicationInstallationForOrganization } from '@commercetools-test-data/graphql-types';

export type TRestrictedCustomApplicationInstallationForOrganizationGraphql =
  TMcSettingsRestrictedCustomApplicationInstallationForOrganization;

export type TRestrictedCustomApplicationInstallationForOrganization = Omit<
  TMcSettingsRestrictedCustomApplicationInstallationForOrganization,
  '__typename'
>;

export type TRestrictedCustomApplicationInstallationForOrganizationBuilder =
  TBuilder<TRestrictedCustomApplicationInstallationForOrganization>;
export type TCreateRestrictedCustomApplicationInstallationForOrganizationBuilder =
  () => TRestrictedCustomApplicationInstallationForOrganizationBuilder;
