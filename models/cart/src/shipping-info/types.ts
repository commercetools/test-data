import type { ShippingInfo } from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TShippingMethodGraphql } from '@commercetools-test-data/shipping-method';
import { TTaxCategoryGraphql } from '@commercetools-test-data/tax-category';
import { TTaxedItemPriceGraphql } from '../taxed-item-price/types';

export type TShippingInfo = ShippingInfo;

export type TShippingInfoGraphql = Omit<
  TShippingInfo,
  'taxedPrice' | 'taxCategory' | 'shippingMethod'
> & {
  taxedPrice?: TTaxedItemPriceGraphql;
  taxCategory?: TTaxCategoryGraphql;
  taxCategoryRef?: TReferenceGraphql;
  shippingMethod?: TShippingMethodGraphql;
  shippingMethodRef?: TReferenceGraphql;
  __typename: 'ShippingInfo';
};

export type TShippingInfoBuilder = TBuilder<ShippingInfo>;
export type TCreateShippingInfoBuilder = () => TShippingInfoBuilder;
