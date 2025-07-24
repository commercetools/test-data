import type { TBuilder } from '@/core';
import { TCtpBaseMoneyInput } from '@/graphql-types';

// This model only exists in the GraphQL API and as a Draft

export type TBaseMoneyDraftGraphql = TCtpBaseMoneyInput;

export type TCreateBaseMoneyBuilder = () => TBuilder<TBaseMoneyDraftGraphql>;
