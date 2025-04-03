import {
  CustomLineItem,
  CustomLineItemDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCustomLineItem,
  TCtpCustomLineItemDraft,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TCustomLineItemRest` instead
 */
export type TCustomLineItem = CustomLineItem;
export type TCustomLineItemRest = CustomLineItem;
export type TCustomLineItemGraphql = TCtpCustomLineItem;

/**
 * @deprecated use `TCustomLineItemDraftRest` instead
 */
export type TCustomLineItemDraft = CustomLineItemDraft;
export type TCustomLineItemDraftRest = CustomLineItemDraft;
export type TCustomLineItemDraftGraphql = TCtpCustomLineItemDraft;

export type TCreateCustomLineItemBuilder<
  TCustomLineItemModel extends
    | TCustomLineItemRest
    | TCustomLineItemGraphql
    | TCustomLineItemDraftRest
    | TCustomLineItemDraftGraphql,
> = () => TBuilder<TCustomLineItemModel>;
