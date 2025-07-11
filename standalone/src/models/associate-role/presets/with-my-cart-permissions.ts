import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import { CART_PERMISSIONS } from '../constants';
import {
  TAssociateRole,
  TAssociateRoleGraphql,
  TAssociateRoleRest,
} from '../types';

const populatePreset = <
  TModel extends TAssociateRoleGraphql | TAssociateRoleRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.permissions([
    CART_PERMISSIONS.CREATE_MY_CARTS,
    CART_PERMISSIONS.DELETE_MY_CARTS,
    CART_PERMISSIONS.UPDATE_MY_CARTS,
    CART_PERMISSIONS.VIEW_MY_CARTS,
  ]);
};

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRole> =>
  populatePreset(CompatModelBuilder());
