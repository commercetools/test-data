import { TBuilder } from '../../../../core';
import type { TMcSettingsOrganizationExtension } from '../../../../graphql-types';

export type TOrganizationExtension = Omit<
  TMcSettingsOrganizationExtension,
  '__typename'
>;

export type TOrganizationExtensionGraphql = TMcSettingsOrganizationExtension;

export type TOrganizationExtensionBuilder = TBuilder<TOrganizationExtension>;
export type TCreateOrganizationExtensionBuilder =
  () => TOrganizationExtensionBuilder;
