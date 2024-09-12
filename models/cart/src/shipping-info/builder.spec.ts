/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import {
  CentPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TaxRate } from '@commercetools-test-data/tax-category';
import { DiscountedLineItemPrice } from '../discounted-line-item-price';
import { TaxedItemPrice } from '../taxed-item-price';
import { TShippingInfo, TShippingInfoGraphql } from './types';
import * as ShippingInfo from '.';

describe('builder', () => {
  const modelBuilder = ShippingInfo.random()
    .taxedPrice(TaxedItemPrice.random())
    .taxRate(TaxRate.random().key('test-tax-rate'))
    .taxCategory(
      Reference.presets.taxCategoryReference().id('test-tax-category')
    )
    .shippingMethod(
      Reference.presets.shippingMethodReference().id('test-shipping-method')
    )
    .discountedPrice(
      DiscountedLineItemPrice.random().value(
        CentPrecisionMoney.random().currencyCode('EUR')
      )
    );
  // TODO: Blocked by another PR
  // .deliveries([]),

  it(
    ...createBuilderSpec<TShippingInfo, TShippingInfo>(
      'rest',
      modelBuilder,
      expect.objectContaining({
        shippingMethodName: expect.any(String),
        price: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        shippingRate: expect.objectContaining({
          price: expect.objectContaining({
            currencyCode: expect.any(String),
          }),
          freeAbove: expect.objectContaining({
            currencyCode: expect.any(String),
          }),
          tiers: expect.any(Array),
        }),
        taxedPrice: expect.objectContaining({
          taxPortions: [],
        }),
        taxRate: expect.objectContaining({
          key: 'test-tax-rate',
        }),
        taxCategory: expect.objectContaining({
          id: 'test-tax-category',
          typeId: 'tax-category',
        }),
        shippingMethod: expect.objectContaining({
          id: 'test-shipping-method',
          typeId: 'shipping-method',
        }),
        // TODO: Blocked by another PR
        // deliveries: [],
        discountedPrice: expect.objectContaining({
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'EUR',
          }),
        }),
        shippingMethodState: expect.stringMatching(
          /^(MatchesCart|DoesNotMatchCart)$/
        ),
      })
    )
  );
  it(
    ...createBuilderSpec<TShippingInfo, TShippingInfoGraphql>(
      'graphql',
      modelBuilder,
      expect.objectContaining({
        shippingMethodName: expect.any(String),
        price: expect.objectContaining({
          __typename: 'Money',
        }),
        shippingRate: expect.objectContaining({
          __typename: 'ShippingRate',
        }),
        taxedPrice: expect.objectContaining({
          taxPortions: [],
          __typename: 'TaxedItemPrice',
        }),
        taxRate: expect.objectContaining({
          key: 'test-tax-rate',
          __typename: 'TaxRate',
        }),
        taxCategory: expect.objectContaining({
          id: 'test-tax-category',
          __typename: 'TaxCategory',
        }),
        taxCategoryRef: expect.objectContaining({
          id: 'test-tax-category',
          typeId: 'tax-category',
        }),
        shippingMethod: expect.objectContaining({
          id: 'test-shipping-method',
          __typename: 'ShippingMethod',
        }),
        shippingMethodRef: expect.objectContaining({
          id: 'test-shipping-method',
          typeId: 'shipping-method',
        }),
        // TODO: Blocked by another PR
        // deliveries: [],
        discountedPrice: expect.objectContaining({
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'EUR',
          }),
          __typename: 'DiscountedLineItemPrice',
        }),
        shippingMethodState: expect.stringMatching(
          /^(MatchesCart|DoesNotMatchCart)$/
        ),
      })
    )
  );
});
