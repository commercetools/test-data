import { TBuilder } from '@/core';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../types';
import { StoreDraftGraphql, StoreDraftRest, StoreDraft } from '../index';

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .name(undefined)
    .languages(undefined)
    .countries(undefined)
    .distributionChannels(undefined)
    .supplyChannels(undefined)
    .productSelections(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TStoreDraftRest> =>
  populatePreset(StoreDraftRest.random());

export const graphqlPreset = (): TBuilder<TStoreDraftGraphql> =>
  populatePreset(StoreDraftGraphql.random());

export const compatPreset = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> => populatePreset(StoreDraft.random());
