import type { TBuilder } from '@/core';
import { TMcProjectPermission } from '@/graphql-types';

// This model only exists in the MC Gateway GraphQL API

export type TProjectPermissionGraphql = TMcProjectPermission;

export type TCreateProjectPermissionBuilder =
  () => TBuilder<TProjectPermissionGraphql>;
