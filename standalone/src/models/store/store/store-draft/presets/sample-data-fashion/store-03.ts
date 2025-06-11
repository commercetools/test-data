import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('sample_store_three')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Three'));
};

export const restPreset = (): TBuilder<TStoreDraftRest> =>
  populatePreset(StoreDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TStoreDraftGraphql> =>
  populatePreset(StoreDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> => populatePreset(StoreDraft.presets.empty());
