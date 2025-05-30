import type { TBuilder } from '@/core';
import type { TMcSettingsRestrictedCustomApplicationInstallationForOrganization } from '@/graphql-types';

export type TCustomApplicationInstallationGraphql =
  TMcSettingsRestrictedCustomApplicationInstallationForOrganization;

export type TCreateCustomApplicationInstallationBuilder<
  TModel extends TCustomApplicationInstallationGraphql,
> = () => TBuilder<TModel>;
