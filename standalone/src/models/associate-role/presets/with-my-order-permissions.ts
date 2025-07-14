import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import { ORDER_PERMISSIONS } from '../constants';
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
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_CARTS,
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_QUOTES,
    ORDER_PERMISSIONS.UPDATE_MY_ORDERS,
    ORDER_PERMISSIONS.VIEW_MY_ORDERS,
  ]);
};

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRole> =>
  populatePreset(CompatModelBuilder());
