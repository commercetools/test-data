import type {
  TextLineItem,
  TextLineItemDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpTextLineItem, TCtpTextLineItemDraft } from '@/graphql-types';

export type TTextLineItemRest = TextLineItem;
export type TTextLineItemDraftRest = TextLineItemDraft;

export type TTextLineItemGraphql = TCtpTextLineItem;
export type TTextLineItemDraftGraphql = TCtpTextLineItemDraft;

export type TCreateTextLineItemBuilder<
  TTextLineItemModel extends
    | TTextLineItemRest
    | TTextLineItemGraphql
    | TTextLineItemDraftRest
    | TTextLineItemDraftGraphql,
> = () => TBuilder<TTextLineItemModel>;
