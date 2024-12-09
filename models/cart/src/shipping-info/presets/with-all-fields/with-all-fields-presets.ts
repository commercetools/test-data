import { Money, Reference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { ShippingRate } from '@commercetools-test-data/shipping-method';
import { TaxRate } from '@commercetools-test-data/tax-category';
import {
  TaxedItemPriceGraphql,
  TaxedItemPriceRest,
} from '../../../taxed-item-price';
import { ShippingInfoGraphql, ShippingInfoRest } from '../../index';
import { TShippingInfoGraphql, TShippingInfoRest } from '../../types';

const populatePreset = <T extends TShippingInfoRest | TShippingInfoGraphql>(
  builder: TBuilder<T>
): TBuilder<T> =>
  builder
    .deliveries([])
    .price(Money.presets.withCurrency('EUR'))
    .shippingMethod(Reference.presets.shippingMethodReference())
    .shippingMethodName('shipping-method-name')
    .shippingRate(ShippingRate.random())
    .taxCategory(Reference.presets.taxCategoryReference())
    .taxRate(TaxRate.presets.withAllFields());

export const restPreset = (): TBuilder<TShippingInfoRest> =>
  populatePreset(ShippingInfoRest.random()).taxedPrice(
    TaxedItemPriceRest.presets.withAllFields()
  );

export const graphqlPreset = (): TBuilder<TShippingInfoGraphql> =>
  populatePreset(ShippingInfoGraphql.random()).taxedPrice(
    TaxedItemPriceGraphql.presets.withAllFields()
  );
