import { TBuilder } from '@/core';
import { types, roles } from '../../../constants';
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
  RestModelBuilder().type(types.LineItemState).roles([roles.Return]);

export const graphqlPreset = (): TBuilder<TStateDraftGraphql> =>
  GraphqlModelBuilder().type(types.LineItemState).roles([roles.Return]);

export const compatPreset = (): TBuilder<TStateDraft> =>
  CompatModelBuilder().type(types.LineItemState).roles([roles.Return]);
