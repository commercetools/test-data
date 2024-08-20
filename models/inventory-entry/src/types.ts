import {
  InventoryEntry,
  InventoryEntryDraft,
  Channel,
} from '@commercetools/platform-sdk';
import { TChannel, TChannelGraphql } from '@commercetools-test-data/channel';
import type {
  TReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Default
export type TInventoryEntry = Omit<InventoryEntry, 'supplyChannel'> & {
  supplyChannel: Channel;
};
export type TInventoryEntryDraft = InventoryEntryDraft;

// REST
export type TInventoryEntryRest = Omit<InventoryEntry, 'supplyChannel'> & {
  supplyChannel: TReferenceRest<TChannel>;
};
export type TInventoryEntryDraftRest = InventoryEntryDraft;

// GraphQL
export type TInventoryEntryGraphql = Omit<InventoryEntry, 'supplyChannel'> & {
  __typename: 'InventoryEntry';
  supplyChannel: TChannelGraphql;
  supplyChannelRef: TReferenceGraphql;
};
export type TInventoryEntryDraftGraphql = TInventoryEntryDraft;

export type TInventoryEntryBuilder = TBuilder<TInventoryEntry>;
export type TInventoryEntryDraftBuilder = TBuilder<TInventoryEntryDraft>;

export type TCreateInventoryEntryBuilder = () => TInventoryEntryBuilder;
export type TCreateInventoryEntryDraftBuilder =
  () => TInventoryEntryDraftBuilder;
