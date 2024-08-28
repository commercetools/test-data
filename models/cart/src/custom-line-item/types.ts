import type {
  CustomLineItem,
  CustomLineItemDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomLineItem = CustomLineItem;
export type TCustomLineItemDraft = CustomLineItemDraft;

export type TCustomLineItemBuilder = TBuilder<TCustomLineItem>;
export type TCustomLineItemDraftBuilder = TBuilder<TCustomLineItemDraft>;
export type TCreateCustomLineItemBuilder = () => TCustomLineItemBuilder;
export type TCreateCustomLineItemDraftBuilder =
  () => TCustomLineItemDraftBuilder;

//scaffolding only
export type TCustomLineItemGraphql = TCustomLineItem & {
  __typename: 'CustomLineItem';
};
export type TCustomLineItemDraftGraphql = TCustomLineItemDraft;
