import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsRestrictedCustomApplicationInstallationForOrganization } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationInstallationGraphql =
  TMcSettingsRestrictedCustomApplicationInstallationForOrganization;

export type TCustomApplicationInstallation = Omit<
  TCustomApplicationInstallationGraphql,
  '__typename'
>;

export type TCustomApplicationInstallationBuilder =
  TBuilder<TCustomApplicationInstallation>;
export type TCreateCustomApplicationInstallationBuilder =
  () => TCustomApplicationInstallationBuilder;
