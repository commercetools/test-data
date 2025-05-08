import { DiscountedLineItemPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpDiscountedLineItemPrice } from '../../../graphql-types';

export type TDiscountedLineItemPriceRest = DiscountedLineItemPrice;

export type TDiscountedLineItemPriceGraphql = TCtpDiscountedLineItemPrice;

export type TCreateDiscountedLineItemPriceBuilder<
  TModel extends TDiscountedLineItemPriceRest | TDiscountedLineItemPriceGraphql,
> = () => TBuilder<TModel>;
