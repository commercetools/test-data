import type { TBuilder } from '@/core';
import { TMcSupportedOAuthScopeForOAuthClient } from '@/graphql-types';

// This model only exists in the MC Gateway GraphQL API

export type TOAuthScopeGraphql = TMcSupportedOAuthScopeForOAuthClient;

export type TCreateOAuthScopeBuilder = () => TBuilder<TOAuthScopeGraphql>;
