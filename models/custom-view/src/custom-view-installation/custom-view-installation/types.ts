import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomViewInstallation } from '@commercetools-test-data/graphql-types';

export type TCustomViewInstallationGraphql = TMcSettingsCustomViewInstallation;

export type TCustomViewInstallation = Omit<
  TCustomViewInstallationGraphql,
  '__typename'
>;

export type TCustomViewInstallationBuilder = TBuilder<TCustomViewInstallation>;
export type TCreateCustomViewInstallationBuilder =
  () => TCustomViewInstallationBuilder;
