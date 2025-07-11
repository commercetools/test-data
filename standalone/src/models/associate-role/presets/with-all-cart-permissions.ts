import type { TBuilder } from '@/core';
import { CART_PERMISSIONS } from '../constants';
import {
  AssociateRoleRest,
  AssociateRoleGraphql,
  AssociateRole,
} from '../index';
import type {
  TAssociateRoleRest,
  TAssociateRoleGraphql,
  TAssociateRole,
} from '../types';

const applyPermissions = <
  TModel extends TAssociateRoleRest | TAssociateRoleGraphql,
>(
  builder: TBuilder<TModel>
) =>
  builder.permissions([
    CART_PERMISSIONS.CREATE_MY_CARTS,
    CART_PERMISSIONS.CREATE_OTHERS_CARTS,
    CART_PERMISSIONS.DELETE_MY_CARTS,
    CART_PERMISSIONS.DELETE_OTHERS_CARTS,
    CART_PERMISSIONS.UPDATE_MY_CARTS,
    CART_PERMISSIONS.UPDATE_OTHERS_CARTS,
    CART_PERMISSIONS.VIEW_MY_CARTS,
    CART_PERMISSIONS.VIEW_OTHERS_CARTS,
  ]);

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  applyPermissions(AssociateRoleRest.random());
export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  applyPermissions(AssociateRoleGraphql.random());
export const compatPreset = (): TBuilder<TAssociateRole> =>
  applyPermissions(AssociateRole.random());
