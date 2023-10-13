import { TBuilder } from '@commercetools-test-data/core';

export type CustomViewPermission = {
  name: string;
  oAuthScopes: string[];
};

export type CustomViewPermissionDraft = CustomViewPermission;

export type TCustomViewPermission = CustomViewPermission;
export type TCustomViewPermissionDraft = CustomViewPermission;

export type TCustomViewPermissionBuilder = TBuilder<CustomViewPermission>;
export type TCreateCustomViewPermissionBuilder =
  () => TCustomViewPermissionBuilder;

export type TCustomViewPermissionDraftBuilder = TBuilder<CustomViewPermission>;
export type TCreateCustomViewPermissionDraftBuilder =
  () => TCustomViewPermissionDraftBuilder;
