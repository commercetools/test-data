import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsRestrictedCustomViewInstallationForOrganization } from '@commercetools-test-data/graphql-types';

export type TRestrictedCustomViewInstallationForOrganizationGraphql =
  TMcSettingsRestrictedCustomViewInstallationForOrganization;

export type TRestrictedCustomViewInstallationForOrganization = Omit<
  TMcSettingsRestrictedCustomViewInstallationForOrganization,
  '__typename'
>;

export type TRestrictedCustomViewInstallationForOrganizationBuilder =
  TBuilder<TRestrictedCustomViewInstallationForOrganization>;
export type TCreateRestrictedCustomViewInstallationForOrganizationBuilder =
  () => TRestrictedCustomViewInstallationForOrganizationBuilder;
