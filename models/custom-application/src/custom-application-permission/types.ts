import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermission } from '@commercetools-test-data/graphql-types';

type TCustomApplicationPermission = Omit<
  TMcSettingsCustomApplicationPermission,
  '__typename'
>;

export type TCustomApplicationPermissionGraphql =
  TMcSettingsCustomApplicationPermission;

export type TCreateCustomApplicationPermissionBuilder<
  TModel extends TCustomApplicationPermissionGraphql,
> = () => TBuilder<TModel>;
