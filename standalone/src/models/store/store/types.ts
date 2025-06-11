import { Store, StoreDraft } from '@commercetools/platform-sdk';
import { TBuilder } from '@/core';
import { TCtpStore, TCtpCreateStore } from '@/graphql-types';

// REST types
export type TStoreRest = Store;
export type TStoreDraftRest = StoreDraft;

// GraphQL types
export type TStoreGraphql = TCtpStore;
export type TStoreDraftGraphql = TCtpCreateStore;

/**
 * @deprecated Use `TStoreRest` or `TStoreGraphql` instead
 */
export type TStore = TStoreRest;

/**
 * @deprecated Use `TStoreDraftRest` or `TStoreDraftGraphql` instead
 */
export type TStoreDraft = TStoreDraftRest;

export type TCreateStoreBuilder<
  TStoreModel extends
    | TStoreRest
    | TStoreGraphql
    | TStoreDraftRest
    | TStoreDraftGraphql,
> = () => TBuilder<TStoreModel>;
