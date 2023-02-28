import {
  TLocalizedStringGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { Channel, LineItem, LineItemDraft } from '@commercetools/platform-sdk';

export type TLineItem = Omit<
  LineItem,
  'supplyChannel' | 'distributionChannel'
> & {
  supplyChannel: Channel;
  distributionChannel: Channel;
};

export type TLineItemRest = LineItem;

export type TLineItemGraphql = TLineItem & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  productSlugAllLocales?: TLocalizedStringGraphql | null;
  productTypeRef: TReferenceGraphql | null;
  supplyChannelRef: TReferenceGraphql | null;
  distributionChannelRef: TReferenceGraphql | null;
  __typename: 'LineItem';
};

export type TLineItemBuilder = TBuilder<TLineItem>;
export type TCreateLineItemBuilder = () => TLineItemBuilder;

export type TLineItemDraft = LineItemDraft;

export type TLineItemDraftGraphql = TLineItemDraft & {
  __typename: 'LineItemDraft';
};
export type TLineItemDraftBuilder = TBuilder<TLineItemDraft>;
export type TCreateLineItemDraftBuilder = () => TLineItemDraftBuilder;
