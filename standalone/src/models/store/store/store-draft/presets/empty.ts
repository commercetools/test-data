import { TBuilder } from '@/core';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../types';
import { StoreDraftGraphql, StoreDraftRest, StoreDraft } from '../index';

export const emptyDraftRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.random()
    .name(undefined)
    .languages(undefined)
    .countries(undefined)
    .distributionChannels(undefined)
    .supplyChannels(undefined)
    .productSelections(undefined)
    .custom(undefined);

export const emptyDraftGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.random()
    .name(undefined)
    .languages(undefined)
    .countries(undefined)
    .distributionChannels(undefined)
    .supplyChannels(undefined)
    .productSelections(undefined)
    .custom(undefined);

/**
 * @deprecated Use `emptyDraftRest` or `emptyDraftGraphql` instead
 */
export const empty = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.random()
    .name(undefined)
    .languages(undefined)
    .countries(undefined)
    .distributionChannels(undefined)
    .supplyChannels(undefined)
    .productSelections(undefined)
    .custom(undefined);
