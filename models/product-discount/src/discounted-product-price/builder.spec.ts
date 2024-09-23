/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import {
  HighPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  DiscountedProductPrice,
  type TDiscountedProductPriceRest,
  type TDiscountedProductPriceGraphql,
} from './';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TDiscountedProductPriceRest,
      TDiscountedProductPriceRest
    >(
      'rest',
      DiscountedProductPrice.random()
        .value(HighPrecisionMoney.random().currencyCode('USD'))
        .discount(Reference.presets.productDiscountReference().id('pd-123')),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'USD',
        }),
        discount: expect.objectContaining({
          id: 'pd-123',
          typeId: 'product-discount',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TDiscountedProductPriceRest,
      TDiscountedProductPriceGraphql
    >(
      'graphql',
      DiscountedProductPrice.random()
        .value(HighPrecisionMoney.random().currencyCode('USD'))
        .discount(Reference.presets.productDiscountReference().id('pd-123')),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'USD',
          __typename: 'HighPrecisionMoney',
        }),
        discount: expect.objectContaining({
          id: 'pd-123',
          __typename: 'ProductDiscount',
        }),
        discountRef: expect.objectContaining({
          id: 'pd-123',
          __typename: 'Reference',
        }),
        __typename: 'DiscountedProductPrice',
      })
    )
  );
});
