import { Store, StoreDraft } from '@commercetools/platform-sdk';
import { TBuilder } from '@/core';
import { TCtpStore } from '@/graphql-types';

export type TStoreRest = Store;
export type TStoreGraphql = TCtpStore;
export type TStoreDraftRest = StoreDraft;
export type TStoreDraftGraphql = TStoreDraftRest;

/**
 * @deprecated Use `TStoreRest` or `TStoreGraphql` instead
 */
export type TStore = TStoreRest;

/**
 * @deprecated Use `TStoreDraftRest` or `TStoreDraftGraphql` instead
 */
export type TStoreDraft = TStoreDraftRest;

export type TCreateStoreBuilder<
  TStoreModel extends TStoreRest | TStoreGraphql,
> = () => TBuilder<TStoreModel>;

export type TCreateStoreDraftBuilder<
  TStoreDraftModel extends TStoreDraftRest | TStoreDraftGraphql,
> = () => TBuilder<TStoreDraftModel>;
