import type { TBuilder } from '../../../../core';
import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
  TProductSelectionDraft,
} from '../../types';
import {
  ProductSelectionDraftRest,
  ProductSelectionDraftGraphql,
  ProductSelectionDraft,
} from '../index';

export const restPreset = (): TBuilder<TProductSelectionDraftRest> =>
  ProductSelectionDraftRest.random()
    .key(undefined)
    .mode(undefined)
    .custom(undefined);

export const graphqlPreset = (): TBuilder<TProductSelectionDraftGraphql> =>
  ProductSelectionDraftGraphql.random()
    .key(undefined)
    .mode(undefined)
    .custom(undefined);

export const compatPreset = (): TBuilder<TProductSelectionDraft> =>
  ProductSelectionDraft.random()
    .key(undefined)
    .mode(undefined)
    .custom(undefined);
