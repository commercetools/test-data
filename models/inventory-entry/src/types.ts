import {
  InventoryEntry,
  InventoryEntryDraft,
  Channel,
} from '@commercetools/platform-sdk';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Default
export type TInventoryEntry = Omit<InventoryEntry, 'supplyChannel'> & {
  supplyChannel: Channel;
};
export type TInventoryEntryDraft = InventoryEntryDraft;

// REST
export type TInventoryEntryRest = InventoryEntry;
export type TInventoryEntryDraftRest = InventoryEntryDraft;

// GraphQL
export type TInventoryEntryGraphql = TInventoryEntry & {
  __typename: 'InventoryEntry';
  supplyChannelRef: TReferenceGraphql;
};
export type TInventoryEntryDraftGraphql = TInventoryEntryDraft;

export type TInventoryEntryBuilder = TBuilder<TInventoryEntry>;
export type TInventoryEntryDraftBuilder = TBuilder<TInventoryEntryDraft>;

export type TCreateInventoryEntryBuilder = () => TInventoryEntryBuilder;
export type TCreateInventoryEntryDraftBuilder =
  () => TInventoryEntryDraftBuilder;
