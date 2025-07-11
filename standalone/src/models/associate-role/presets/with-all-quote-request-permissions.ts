import type { TBuilder } from '@/core';
import { QUOTE_REQUEST_PERMISSIONS } from '../constants';
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
    QUOTE_REQUEST_PERMISSIONS.CREATE_MY_QUOTE_REQUESTS_FROM_MY_CARTS,
    QUOTE_REQUEST_PERMISSIONS.CREATE_QUOTE_REQUESTS_FROM_OTHERS_CARTS,
    QUOTE_REQUEST_PERMISSIONS.UPDATE_MY_QUOTE_REQUESTS,
    QUOTE_REQUEST_PERMISSIONS.UPDATE_OTHERS_QUOTE_REQUESTS,
    QUOTE_REQUEST_PERMISSIONS.VIEW_MY_QUOTE_REQUESTS,
    QUOTE_REQUEST_PERMISSIONS.VIEW_OTHERS_QUOTE_REQUESTS,
  ]);

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  applyPermissions(AssociateRoleRest.random());
export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  applyPermissions(AssociateRoleGraphql.random());
export const compatPreset = (): TBuilder<TAssociateRole> =>
  applyPermissions(AssociateRole.random());
