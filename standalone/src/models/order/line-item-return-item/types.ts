import type { LineItemReturnItem } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpLineItemReturnItem } from '@/graphql-types';

/**
 * @deprecated use `TLineItemReturnItemRest` instead
 */
export type TLineItemReturnItem = LineItemReturnItem;
export type TLineItemReturnItemRest = LineItemReturnItem;
export type TLineItemReturnItemGraphql = TCtpLineItemReturnItem;

export type TCreateLineItemReturnItemBuilder<
  TLineItemReturnItemModel extends
    | TLineItemReturnItemRest
    | TLineItemReturnItemGraphql,
> = () => TBuilder<TLineItemReturnItemModel>;
