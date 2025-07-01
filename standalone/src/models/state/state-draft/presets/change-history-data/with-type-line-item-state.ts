import { TBuilder } from '@/core';
import { TCtpStateType, TCtpStateRole } from '@/graphql-types';
import {
  TStateDraft,
  TStateDraftGraphql,
  TStateDraftRest,
} from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

export const restPreset = (): TBuilder<TStateDraftRest> =>
  RestModelBuilder()
    .type(TCtpStateType.LineItemState)
    .roles([TCtpStateRole.Return]);

export const graphqlPreset = (): TBuilder<TStateDraftGraphql> =>
  GraphqlModelBuilder()
    .type(TCtpStateType.LineItemState)
    .roles([TCtpStateRole.Return]);

export const compatPreset = (): TBuilder<TStateDraft> =>
  CompatModelBuilder()
    .type(TCtpStateType.LineItemState)
    .roles([TCtpStateRole.Return]);
