import type { TBuilder } from '@/core';
import type {
  TAssociateRoleDraft,
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../../types';
import {
  AssociateRoleDraftRest,
  AssociateRoleDraftGraphql,
  AssociateRoleDraft,
} from '../index';

const populate = <
  TModel extends TAssociateRoleDraftRest | TAssociateRoleDraftGraphql,
>(
  builder: TBuilder<TModel>
) =>
  builder
    .name(undefined)
    .buyerAssignable(undefined)
    .permissions(undefined)
    .custom(undefined);

export const restPreset = (): TBuilder<TAssociateRoleDraftRest> =>
  populate(AssociateRoleDraftRest.random());

export const graphqlPreset = (): TBuilder<TAssociateRoleDraftGraphql> =>
  populate(AssociateRoleDraftGraphql.random());

export const compatPreset = (): TBuilder<TAssociateRoleDraft> =>
  populate(AssociateRoleDraft.random());
