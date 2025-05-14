import { TBuilder } from '@/core';
import type {
  TMcSettingsCustomApplicationDraftDataInput,
  TMcSettingsRestrictedCustomApplicationForOrganization,
} from '@/graphql-types';

export type TCustomApplication = Omit<
  TMcSettingsRestrictedCustomApplicationForOrganization,
  '__typename'
>;

export type TCustomApplicationGraphql =
  TMcSettingsRestrictedCustomApplicationForOrganization;

export type TCustomApplicationDraft =
  TMcSettingsCustomApplicationDraftDataInput;
export type TCustomApplicationDraftGraphql = TCustomApplicationDraft;

export type TCustomApplicationBuilder = TBuilder<TCustomApplication>;
export type TCreateCustomApplicationBuilder = () => TCustomApplicationBuilder;

export type TCustomApplicationDraftBuilder = TBuilder<TCustomApplicationDraft>;
export type TCreateCustomApplicationDraftBuilder =
  () => TCustomApplicationDraftBuilder;
