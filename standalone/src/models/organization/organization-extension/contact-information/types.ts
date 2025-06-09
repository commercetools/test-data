import { TBuilder } from '@/core';
import type { TMcSettingsContactInformation } from '@/graphql-types';

export type TContactInformationGraphql = TMcSettingsContactInformation;

export type TCreateContactInformationBuilder =
  () => TBuilder<TContactInformationGraphql>;
