import type { LineItem, LineItemDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpLineItem,
  TCtpLineItemDraft,
} from '@commercetools-test-data/graphql-types';
/**
 * @deprecated Use `TCtpLineItemRest` or `TCtpLineItemGraphql` instead.
 */
export type TLineItem = LineItem;
export type TLineItemRest = LineItem;
export type TLineItemGraphql = TCtpLineItem;
/**
 * @deprecated Use `TCtpLineItemDraftRest` or `TCtpLineItemDraftGraphql` instead.
 */
export type TLineItemDraft = LineItemDraft;
export type TLineItemDraftRest = LineItemDraft;
export type TLineItemDraftGraphql = TCtpLineItemDraft;

export type TCreateLineItemBuilder<
  TLineItemModel extends
    | TLineItemRest
    | TLineItemGraphql
    | TLineItemDraftRest
    | TLineItemDraftGraphql,
> = () => TBuilder<TLineItemModel>;
