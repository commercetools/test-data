import type { TaxedItemPrice } from '@commercetools/platform-sdk';
import { TBuilder } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/carts#taxeditemprice

export type TTaxedItemPrice = TaxedItemPrice;
export type TTaxedItemPriceRest = TTaxedItemPrice;
export type TTaxedItemPriceGraphql = TTaxedItemPrice & {
  __typename: 'TaxedItemPrice';
};

export type TTaxedItemPriceBuilder = TBuilder<TTaxedItemPrice>;
export type TCreateTaxedItemPriceBuilder = () => TTaxedItemPriceBuilder;
