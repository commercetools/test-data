import {
  InventoryEntry,
  InventoryEntryDraft,
} from '@commercetools/platform-sdk';
import { TChannelGraphql } from '@commercetools-test-data/channel';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Default
/**
 * @deprecated use `TInventoryEntryRest` instead
 */
export type TInventoryEntry = InventoryEntry;
export type TInventoryEntryDraft = InventoryEntryDraft;

// REST
export type TInventoryEntryRest = InventoryEntry;
export type TInventoryEntryDraftRest = InventoryEntryDraft;

// GraphQL
export type TInventoryEntryGraphql = Omit<InventoryEntry, 'supplyChannel'> & {
  __typename: 'InventoryEntry';
  supplyChannel?: TChannelGraphql | null;
  supplyChannelRef?: TReferenceGraphql<'channel'> | null;
};
export type TInventoryEntryDraftGraphql = TInventoryEntryDraft;

export type TInventoryEntryBuilder = TBuilder<TInventoryEntry>;
export type TInventoryEntryDraftBuilder = TBuilder<TInventoryEntryDraft>;

export type TCreateInventoryEntryBuilder<
  TInventoryEntryModel extends
    | TInventoryEntryRest
    | TInventoryEntryGraphql
    | TInventoryEntryDraftRest
    | TInventoryEntryDraftGraphql,
> = () => TBuilder<TInventoryEntryModel>;
