import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsOidcSsoConfigDataInput } from '@commercetools-test-data/graphql-types';

export type TOidcSsoConfigDraft = Omit<
  TMcSettingsOidcSsoConfigDataInput,
  '__typename'
>;

export type TOidcSsoConfigDraftGraphql = TMcSettingsOidcSsoConfigDataInput;

export type TOidcSsoConfigDraftBuilder = TBuilder<TOidcSsoConfigDraft>;
export type TCreateOidcSsoConfigDraftBuilder = () => TOidcSsoConfigDraftBuilder;
