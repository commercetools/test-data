import type { TBuilder } from '@/core';
import type {
  TMcSettingsCustomApplicationPermission,
  TMcSettingsCustomApplicationPermissionDataInput,
} from '@/graphql-types';

export type TCustomApplicationPermissionGraphql =
  TMcSettingsCustomApplicationPermission;

export type TCustomApplicationPermissionDraftGraphql =
  TMcSettingsCustomApplicationPermissionDataInput;

/**
 * @deprecated use `TCustomApplicationPermissionDraftGraphql` instead
 */
export type TCustomApplicationPermissionDraft =
  TCustomApplicationPermissionDraftGraphql;

export type TCreateCustomApplicationPermissionBuilder<
  TModel extends
    | TCustomApplicationPermissionGraphql
    | TCustomApplicationPermissionDraftGraphql,
> = () => TBuilder<TModel>;
