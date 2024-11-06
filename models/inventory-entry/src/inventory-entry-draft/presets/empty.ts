import { TBuilder } from '@commercetools-test-data/core';
import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../index';

const populatePreset = <
  TModel extends TInventoryEntryDraftGraphql | TInventoryEntryDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .supplyChannel(undefined)
    .restockableInDays(undefined)
    .expectedDelivery(undefined);
};

export const restPreset = (): TBuilder<TInventoryEntryDraftRest> =>
  populatePreset(InventoryEntryDraftRest.random());

export const graphqlPreset = (): TBuilder<TInventoryEntryDraftGraphql> =>
  populatePreset(InventoryEntryDraftGraphql.random());

export const compatPreset = (): TBuilder<TInventoryEntryDraft> =>
  populatePreset(InventoryEntryDraft.random());
