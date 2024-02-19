import type { TBuilder } from '@commercetools-test-data/core';

export type TAppliedPermission = {
  name: string;
  value: boolean;
};

export type TAppliedPermissionGraphql = TAppliedPermission & {
  __typename: 'AppliedPermission';
};

export type TAppliedPermissionBuilder = TBuilder<TAppliedPermission>;
export type TCreateAppliedPermissionBuilder = () => TAppliedPermissionBuilder;
