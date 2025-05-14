import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermission } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationPermissionGraphql =
  TMcSettingsCustomApplicationPermission;

export type TCreateCustomApplicationPermissionBuilder<
  TModel extends TCustomApplicationPermissionGraphql,
> = () => TBuilder<TModel>;
