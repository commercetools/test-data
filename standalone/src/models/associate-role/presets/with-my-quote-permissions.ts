import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import { QUOTE_PERMISSIONS } from '../constants';
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
    QUOTE_PERMISSIONS.ACCEPT_MY_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_MY_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_MY_QUOTES,
    QUOTE_PERMISSIONS.VIEW_MY_QUOTES,
  ]);
};

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRole> =>
  populatePreset(CompatModelBuilder());
