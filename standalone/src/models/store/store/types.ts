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

export type TCreateStoreBuilder<
  TStoreModel extends TStoreRest | TStoreGraphql,
> = () => TBuilder<TStoreModel>;
