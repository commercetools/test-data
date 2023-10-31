import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomViewInstallationPermission = {
  name: string;
  oAuthScopes: string[];
};
export type TCustomViewInstallationPermissionGraphql =
  TCustomViewInstallationPermission & {
    __typename: 'CustomViewInstallationPermission';
  };

export type TCustomViewInstallationPermissionBuilder =
  TBuilder<TCustomViewInstallationPermission>;
export type TCreateCustomViewInstallationPermissionBuilder =
  () => TCustomViewInstallationPermissionBuilder;
