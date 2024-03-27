import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationInstallation } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationInstallationGraphql =
  TMcSettingsCustomApplicationInstallation;

export type TCustomApplicationInstallation = Omit<
  TCustomApplicationInstallationGraphql,
  '__typename'
>;

export type TCustomApplicationInstallationBuilder =
  TBuilder<TCustomApplicationInstallation>;
export type TCreateCustomApplicationInstallationBuilder =
  () => TCustomApplicationInstallationBuilder;
