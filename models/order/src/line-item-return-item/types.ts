import type { LineItemReturnItem } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TLineItemReturnItem = LineItemReturnItem;

export type TLineItemReturnItemGraphql = TLineItemReturnItem & {
  __typename: 'LineItemReturnItem';
};

export type TLineItemReturnItemBuilder = TBuilder<LineItemReturnItem>;
export type TCreateLineItemReturnItemBuilder = () => TLineItemReturnItemBuilder;
