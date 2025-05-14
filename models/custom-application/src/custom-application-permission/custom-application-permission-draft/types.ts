import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermissionDataInput } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationPermissionDraftGraphql =
  TMcSettingsCustomApplicationPermissionDataInput;

export type TCreateCustomApplicationPermissionDraftBuilder<
  TModel extends TCustomApplicationPermissionDraftGraphql,
> = () => TBuilder<TModel>;
