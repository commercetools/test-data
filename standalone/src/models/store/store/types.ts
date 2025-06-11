import { Store, StoreDraft } from '@commercetools/platform-sdk';
import { TBuilder } from '@/core';
import { TCtpStore } from '@/graphql-types';

export type TStoreRest = Store;
export type TStoreGraphql = TCtpStore;
export type TStoreDraftRest = StoreDraft;
export type TStoreDraftGraphql = StoreDraft;

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
