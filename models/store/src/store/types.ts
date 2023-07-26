import type { Store, StoreDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TStore = Store;
export type TStoreDraft = StoreDraft;

export type TStoreGraphql = TStore & {
  __typename: 'Store';
};
// StoreDraft/StoreInput does not exist in a graphql format

export type TStoreBuilder = TBuilder<TStore>;
export type TStoreDraftBuilder = TBuilder<TStoreDraft>;

export type TCreateStoreBuilder = () => TStoreBuilder;
export type TCreateStoreDraftBuilder = () => TStoreDraftBuilder;
