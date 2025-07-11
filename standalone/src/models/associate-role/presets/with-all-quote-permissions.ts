import type { TBuilder } from '@/core';
import { QUOTE_PERMISSIONS } from '../constants';
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
    QUOTE_PERMISSIONS.VIEW_MY_QUOTES,
    QUOTE_PERMISSIONS.VIEW_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.ACCEPT_MY_QUOTES,
    QUOTE_PERMISSIONS.ACCEPT_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_MY_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_MY_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_OTHERS_QUOTES,
  ]);

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  applyPermissions(AssociateRoleRest.random());
export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  applyPermissions(AssociateRoleGraphql.random());
export const compatPreset = (): TBuilder<TAssociateRole> =>
  applyPermissions(AssociateRole.random());
