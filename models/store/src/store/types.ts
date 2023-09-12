import type { Store, StoreDraft } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

//StoreDraft
export type TStoreDraft = StoreDraft;
export type TStoreDraftBuilder = TBuilder<TStoreDraft>;
export type TCreateStoreDraftBuilder = () => TStoreDraftBuilder;
export type TStoreDraftGraphql = Omit<TStoreDraft, 'name'> & {
  name: TLocalizedStringGraphql | null;
  __typename: 'StoreDraft';
};
//Store
export type TStore = Store;
export type TStoreBuilder = TBuilder<TStore>;
export type TCreateStoreBuilder = () => TStoreBuilder;
export type TStoreGraphql = TStore & {
  __typename: 'Store';
  nameAllLocales?: TLocalizedStringGraphql | null;
};
