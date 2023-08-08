import type { Store, StoreDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//StoreDraft
export type TStoreDraft = StoreDraft;
export type TStoreDraftBuilder = TBuilder<TStoreDraft>;
export type TCreateStoreDraftBuilder = () => TStoreDraftBuilder;
//StoreDraft not supported in GraphQL at this time.

//Store
export type TStore = Store;
export type TStoreBuilder = TBuilder<TStore>;
export type TCreateStoreBuilder = () => TStoreBuilder;
export type TStoreGraphql = TStore & {
  __typename: 'Store';
};
