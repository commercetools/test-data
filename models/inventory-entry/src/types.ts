import {
  InventoryEntry,
  InventoryEntryDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TCtpInventoryEntry,
  TCtpInventoryEntryDraft,
} from '@commercetools-test-data/graphql-types';

// Default
/**
 * @deprecated use `TInventoryEntryRest` instead
 */
export type TInventoryEntry = InventoryEntry;
/**
 * @deprecated use `TInventoryEntryDraftRest` instead
 */
export type TInventoryEntryDraft = InventoryEntryDraft;

// REST
export type TInventoryEntryRest = InventoryEntry;
export type TInventoryEntryDraftRest = InventoryEntryDraft;

// GraphQL
export type TInventoryEntryGraphql = TCtpInventoryEntry;
export type TInventoryEntryDraftGraphql = TCtpInventoryEntryDraft;

export type TInventoryEntryBuilder = TBuilder<TInventoryEntry>;
export type TInventoryEntryDraftBuilder = TBuilder<TInventoryEntryDraft>;

export type TCreateInventoryEntryBuilder<
  TInventoryEntryModel extends
    | TInventoryEntryRest
    | TInventoryEntryGraphql
    | TInventoryEntryDraftRest
    | TInventoryEntryDraftGraphql,
> = () => TBuilder<TInventoryEntryModel>;
