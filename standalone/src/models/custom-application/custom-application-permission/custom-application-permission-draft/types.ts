import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationPermissionDataInput } from '@/graphql-types';

export type TCustomApplicationPermissionDraftGraphql =
  TMcSettingsCustomApplicationPermissionDataInput;

export type TCreateCustomApplicationPermissionDraftBuilder<
  TModel extends TCustomApplicationPermissionDraftGraphql,
> = () => TBuilder<TModel>;
