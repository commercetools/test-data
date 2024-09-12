/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TDiscountedLineItemPrice,
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from './types';
import { DiscountedLineItemPrice } from '.';

describe('DiscountedLineItemPrice builder spec', () => {
  const expectGenericCentPrecisionMoney = expect.objectContaining({
    centAmount: expect.any(Number),
    currencyCode: expect.any(String),
    fractionDigits: expect.any(Number),
  });

  it(
    ...createBuilderSpec<
      TDiscountedLineItemPrice,
      TDiscountedLineItemPriceRest
    >(
      'rest',
      DiscountedLineItemPrice.random(),
      expect.objectContaining({
        value: expectGenericCentPrecisionMoney,
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.objectContaining({
              typeId: 'cart-discount',
              id: expect.any(String),
            }),
            discountedAmount: expectGenericCentPrecisionMoney,
          }),
        ]),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TDiscountedLineItemPrice,
      TDiscountedLineItemPriceGraphql
    >(
      'graphql',
      DiscountedLineItemPrice.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          __typename: 'Money',
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.objectContaining({
              key: expect.any(String),
              __typename: 'CartDiscount',
            }),
            discountRef: expect.objectContaining({
              typeId: 'cart-discount',
              id: expect.any(String),
            }),
            discountedAmount: expectGenericCentPrecisionMoney,
          }),
        ]),
      })
    )
  );
});
