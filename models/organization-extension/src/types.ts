import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsOrganizationExtension } from '@commercetools-test-data/graphql-types';

export type TOrganizationExtension = Omit<
  TMcSettingsOrganizationExtension,
  '__typename'
>;

export type TOrganizationExtensionGraphql = TMcSettingsOrganizationExtension;

export type TOrganizationExtensionBuilder = TBuilder<TOrganizationExtension>;
export type TCreateOrganizationExtensionBuilder =
  () => TOrganizationExtensionBuilder;
