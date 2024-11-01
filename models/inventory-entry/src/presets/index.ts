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

export const restPresets = (): TBuilder<TInventoryEntryRest> => {
  return {} as TBuilder<TInventoryEntryRest>;
};

export const graphqlPresets = (): TBuilder<TInventoryEntryGraphql> => {
  return {} as TBuilder<TInventoryEntryGraphql>;
};

export const compatPresets = (): TBuilder<TInventoryEntry> => {
  return {} as TBuilder<TInventoryEntry>;
};
