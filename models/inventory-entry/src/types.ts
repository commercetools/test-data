import type {
  InventoryEntry,
  InventoryEntryDraft,
} from '@commercetools/platform-sdk';
import type { TChannelGraphql } from '@commercetools-test-data/channel';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Default
export type TInventoryEntry = InventoryEntry;
export type TInventoryEntryDraft = InventoryEntryDraft;

// REST
export type TInventoryEntryRest = TInventoryEntry;
export type TInventoryEntryDraftRest = InventoryEntryDraft;

// GraphQL
export type TInventoryEntryGraphql = Omit<InventoryEntry, 'supplyChannel'> & {
  __typename: 'InventoryEntry';
  supplyChannel?: TChannelGraphql;
  supplyChannelRef?: TReferenceGraphql;
};
export type TInventoryEntryDraftGraphql = TInventoryEntryDraft;

export type TInventoryEntryBuilder = TBuilder<TInventoryEntry>;
export type TInventoryEntryDraftBuilder = TBuilder<TInventoryEntryDraft>;

export type TCreateInventoryEntryBuilder = () => TInventoryEntryBuilder;
export type TCreateInventoryEntryDraftBuilder =
  () => TInventoryEntryDraftBuilder;
