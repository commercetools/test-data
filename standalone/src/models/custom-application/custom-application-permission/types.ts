import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationPermission } from '@/graphql-types';

export type TCustomApplicationPermissionGraphql =
  TMcSettingsCustomApplicationPermission;

export type TCreateCustomApplicationPermissionBuilder<
  TModel extends TCustomApplicationPermissionGraphql,
> = () => TBuilder<TModel>;
