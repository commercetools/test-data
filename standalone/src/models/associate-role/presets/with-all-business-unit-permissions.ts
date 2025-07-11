import type { TBuilder } from '@/core';
import { BUSINESS_UNIT_PERMISSIONS } from '../constants';
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
    BUSINESS_UNIT_PERMISSIONS.ADD_CHILD_UNITS,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_ASSOCIATES,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_BUSINESS_UNIT_DETAILS,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_PARENT_UNIT,
  ]);

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  applyPermissions(AssociateRoleRest.random());
export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  applyPermissions(AssociateRoleGraphql.random());
export const compatPreset = (): TBuilder<TAssociateRole> =>
  applyPermissions(AssociateRole.random());
