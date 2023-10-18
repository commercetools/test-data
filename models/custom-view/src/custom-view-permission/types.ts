import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomViewPermission = {
  name: string;
  oAuthScopes: string[];
};
export type TCustomViewPermissionGraphql = TCustomViewPermission & {
  __typename: 'CustomViewPermission';
};

export type TCustomViewPermissionBuilder = TBuilder<TCustomViewPermission>;
export type TCreateCustomViewPermissionBuilder =
  () => TCustomViewPermissionBuilder;

export type TCustomViewPermissionDraftBuilder = TBuilder<TCustomViewPermission>;
export type TCreateCustomViewPermissionDraftBuilder =
  () => TCustomViewPermissionDraftBuilder;
