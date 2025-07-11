import { TBuilder } from '@/core';
import type {
  TAssociateRoleDraft,
  TAssociateRoleDraftGraphql,
  TAssociateRoleDraftRest,
} from '../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TAssociateRoleDraftGraphql | TAssociateRoleDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.name(null).permissions([]).custom(null);
};

export const restPreset = (): TBuilder<TAssociateRoleDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAssociateRoleDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAssociateRoleDraft> =>
  populatePreset(CompatModelBuilder());
