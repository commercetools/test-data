import { TBuilder } from '@/core';
import type {
  TMcSettingsOidcSsoConfig,
  TMcSettingsOidcSsoConfigDataInput,
} from '@/graphql-types';

export type TOidcSsoConfigGraphql = TMcSettingsOidcSsoConfig;
export type TOidcSsoConfigDraftGraphql = TMcSettingsOidcSsoConfigDataInput;

export type TCreateOidcSsoConfigBuilder<
  TModel extends TOidcSsoConfigGraphql | TOidcSsoConfigDraftGraphql,
> = () => TBuilder<TModel>;
