import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import { QUOTE_REQUEST_PERMISSIONS } from '../constants';
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
    QUOTE_REQUEST_PERMISSIONS.CREATE_MY_QUOTE_REQUESTS_FROM_MY_CARTS,
    QUOTE_REQUEST_PERMISSIONS.UPDATE_MY_QUOTE_REQUESTS,
    QUOTE_REQUEST_PERMISSIONS.VIEW_MY_QUOTE_REQUESTS,
  ]);
};

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRole> =>
  populatePreset(CompatModelBuilder());
