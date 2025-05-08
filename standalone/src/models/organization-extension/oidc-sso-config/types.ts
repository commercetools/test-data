import { TBuilder } from '../../../core';
import type { TMcSettingsOidcSsoConfig } from '../../../graphql-types';

export type TOidcSsoConfig = Omit<TMcSettingsOidcSsoConfig, '__typename'>;

export type TOidcSsoConfigGraphql = TMcSettingsOidcSsoConfig;

export type TOidcSsoConfigBuilder = TBuilder<TOidcSsoConfig>;
export type TCreateOidcSsoConfigBuilder = () => TOidcSsoConfigBuilder;
