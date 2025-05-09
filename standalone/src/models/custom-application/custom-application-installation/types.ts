import type { TBuilder } from '../../../core';
import type { TMcSettingsRestrictedCustomApplicationInstallationForOrganization } from '../../../graphql-types';

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
