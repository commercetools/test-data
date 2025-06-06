import type { TBuilder } from '@/core';
import type { TMcSettingsCustomViewInstallation } from '@/graphql-types';

export type TCustomViewInstallationGraphql = TMcSettingsCustomViewInstallation;

export type TCustomViewInstallation = Omit<
  TCustomViewInstallationGraphql,
  '__typename'
>;

export type TCustomViewInstallationBuilder = TBuilder<TCustomViewInstallation>;
export type TCreateCustomViewInstallationBuilder =
  () => TCustomViewInstallationBuilder;
