import type { TBuilder } from '@commercetools-test-data/core';
import {
  InventoryEntry,
  InventoryEntryGraphql,
  InventoryEntryRest,
} from '../index';
import type {
  TInventoryEntry,
  TInventoryEntryGraphql,
  TInventoryEntryRest,
} from '../types';

const populatePreset = <
  TModel extends TInventoryEntryGraphql | TInventoryEntryRest,
>() => {
  return;
};

export const restPreset = (): TBuilder<TInventoryEntryRest> => {};

export const graphqlPreset = (): TBuilder<TInventoryEntryGraphql> => {};

export const compatPreset = (): TBuilder<TInventoryEntry> => {};
