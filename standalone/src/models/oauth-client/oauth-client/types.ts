import type { TBuilder } from '@/core';
import { TMcOAuthClient } from '@/graphql-types';

// This model only exists in the MC Gateway GraphQL API

export type TOAuthClientGraphql = TMcOAuthClient;

export type TCreateOAuthClientBuilder = () => TBuilder<TOAuthClientGraphql>;
