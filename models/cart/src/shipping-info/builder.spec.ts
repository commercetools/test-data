/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { ShippingMethod } from '@commercetools-test-data/shipping-method';
import { TaxRate, TaxCategory } from '@commercetools-test-data/tax-category';
import { Delivery } from '../../../order/src';
import { TShippingInfo, TShippingInfoGraphql } from './types';
import * as ShippingInfo from '.';

describe('builder', () => {
  const defaultShippingInfoSpec = {
    shippingMethodName: expect.any(String),
    price: expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
      fractionDigits: expect.any(Number),
      type: expect.any(String),
    }),

    shippingRate: expect.objectContaining({
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      freeAbove: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      tiers: expect.any(Array),
    }),
    taxedPrice: null,
    taxRate: null,
    taxCategory: null,
    shippingMethod: null,
    deliveries: [],
    discountedPrice: null,
    shippingMethodState: expect.stringMatching(
      /^(MatchesCart|DoesNotMatchCart)$/
    ),
  };
  it(
    ...createBuilderSpec<TShippingInfo, TShippingInfo>(
      'default',
      ShippingInfo.random(),
      expect.objectContaining(defaultShippingInfoSpec)
    )
  );
  it(
    ...createBuilderSpec<TShippingInfo, TShippingInfoGraphql>(
      'graphql',
      ShippingInfo.random(),
      expect.objectContaining({
        ...defaultShippingInfoSpec,
        __typename: 'ShippingInfo',
      })
    )
  );

  it('should allow customization', () => {
    const shippingMethodName = 'Test Shipping method name';
    // const centAmount = 100;
    const currencyCode = 'EUR';
    const price = CentPrecisionMoney.random().currencyCode(currencyCode);
    const name = 'Test Name';
    const id = 'Test Id';

    const taxRate = TaxRate.random().name(name);
    const taxCategory = TaxCategory.random().name(name);
    const shippingMethod = ShippingMethod.random().name(name);
    const deliveries = Delivery.random().id(id);

    const shippingInfoMock = ShippingInfo.random()
      .shippingMethodName(shippingMethodName)
      .price(price)
      // .taxedPrice(taxedPrice)
      .taxRate(taxRate)
      .taxCategory(taxCategory)
      .shippingMethod(shippingMethod)
      .deliveries([deliveries])
      // .discountedPrice(discountedPriceDummy)
      .buildGraphql();

    expect(shippingInfoMock).toEqual(
      expect.objectContaining({
        shippingMethodName: shippingMethodName,
        price: expect.objectContaining({
          currencyCode,
        }),
        // taxedPrice: expect.objectContaining({
        //   totalNet: expect.objectContaining({ centAmount, currencyCode }),
        // }),
        taxRate: expect.objectContaining({ name }),
        taxCategory: expect.objectContaining({ name }),
        shippingMethod: expect.objectContaining({ name }),
        deliveries: expect.arrayContaining([expect.objectContaining({ id })]),
        // discountedPrice: expect.objectContaining({
        //   value: expect.objectContaining({ currencyCode, centAmount }),
        // }),
        shippingMethodState: expect.stringMatching(
          /^(MatchesCart|DoesNotMatchCart)$/
        ),
        __typename: 'ShippingInfo',
      })
    );
  });
});
