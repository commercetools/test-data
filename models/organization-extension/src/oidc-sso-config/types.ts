import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsOidcSsoConfig } from '@commercetools-test-data/graphql-types';

export type TOidcSsoConfig = Omit<TMcSettingsOidcSsoConfig, '__typename'>;

export type TOidcSsoConfigGraphql = TMcSettingsOidcSsoConfig;

export type TOidcSsoConfigBuilder = TBuilder<TOidcSsoConfig>;
export type TCreateOidcSsoConfigBuilder = () => TOidcSsoConfigBuilder;
