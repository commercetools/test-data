import type { TBuilder } from '@/core';
import { ORDER_PERMISSIONS } from '../constants';
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
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_CARTS,
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_QUOTES,
    ORDER_PERMISSIONS.UPDATE_MY_ORDERS,
    ORDER_PERMISSIONS.VIEW_MY_ORDERS,
  ]);

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  applyPermissions(AssociateRoleRest.random());
export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  applyPermissions(AssociateRoleGraphql.random());
export const compatPreset = (): TBuilder<TAssociateRole> =>
  applyPermissions(AssociateRole.random());
