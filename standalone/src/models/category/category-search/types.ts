import type { TBuilder } from '@/core';
import { TCtpCategorySearch } from '@/graphql-types';

// There's no REST type for CategorySearch because this entity is only available in GraphQL API.

export type TCategorySearchGraphql = TCtpCategorySearch;

export type TCategorySearchBuilder = () => TBuilder<TCategorySearchGraphql>;
