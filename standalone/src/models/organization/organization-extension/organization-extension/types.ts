import { TBuilder } from '@/core';
import type { TMcSettingsOrganizationExtension } from '@/graphql-types';

export type TOrganizationExtensionGraphql = TMcSettingsOrganizationExtension;

export type TCreateOrganizationExtensionBuilder =
  () => TBuilder<TOrganizationExtensionGraphql>;
