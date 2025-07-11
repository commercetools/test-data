import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import { BUSINESS_UNIT_PERMISSIONS } from '../constants';
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
  return builder.permissions(Object.values(BUSINESS_UNIT_PERMISSIONS));
};

export const restPreset = (): TBuilder<TAssociateRoleRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRole> =>
  populatePreset(CompatModelBuilder());
