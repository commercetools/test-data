import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

const populatePreset = <TModel extends TStoreDraftRest | TStoreDraftGraphql>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('b2c-retail-store')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('B2C Retail Store')
        ['en-GB']('B2C Retail Store')
    );
};

export const restPreset = (): TBuilder<TStoreDraftRest> =>
  populatePreset(StoreDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TStoreDraftGraphql> =>
  populatePreset(StoreDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> => populatePreset(StoreDraft.presets.empty());
