import type { TBuilder } from '@commercetools-test-data/core';
import type { TLimit } from '../limit';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TShoppingListLimitsProjection = {
  total: TLimitWithCurrent;
  lineItems: TLimit;
  textLineItems: TLimit;
};

export type TShoppingListLimitsProjectionGraphql =
  TShoppingListLimitsProjection & {
    __typename: 'ShoppingListLimitsProjection';
  };

export type TShoppingListLimitsProjectionBuilder =
  TBuilder<TShoppingListLimitsProjection>;
export type TCreateShoppingListLimitsProjectionBuilder =
  () => TShoppingListLimitsProjectionBuilder;
