import type { Store, StoreDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@/models/commons';

//StoreDraft
export type TStoreDraft = StoreDraft;
export type TStoreDraftBuilder = TBuilder<TStoreDraft>;
export type TCreateStoreDraftBuilder = () => TStoreDraftBuilder;
export type TStoreDraftGraphql = Omit<TStoreDraft, 'name'> & {
  name: TLocalizedStringDraftGraphql | null;
};
//Store
export type TStore = Store;
export type TStoreBuilder = TBuilder<TStore>;
export type TCreateStoreBuilder = () => TStoreBuilder;
export type TStoreGraphql = TStore & {
  __typename: 'Store';
  nameAllLocales?: TLocalizedStringGraphql | null;
};
