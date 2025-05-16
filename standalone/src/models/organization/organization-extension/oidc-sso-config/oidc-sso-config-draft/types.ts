import { TBuilder } from '@/core';
import type { TMcSettingsOidcSsoConfigDataInput } from '@/graphql-types';

export type TOidcSsoConfigDraft = Omit<
  TMcSettingsOidcSsoConfigDataInput,
  '__typename'
>;

export type TOidcSsoConfigDraftGraphql = TMcSettingsOidcSsoConfigDataInput;

export type TOidcSsoConfigDraftBuilder = TBuilder<TOidcSsoConfigDraft>;
export type TCreateOidcSsoConfigDraftBuilder = () => TOidcSsoConfigDraftBuilder;
