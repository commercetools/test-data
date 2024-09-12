/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TDiscountedLineItemPortion,
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from './types';
import { DiscountedLineItemPortion } from '.';

describe('DiscountedLineItemPortion builder spec', () => {
  const expectGenericCentPrecisionMoney = expect.objectContaining({
    centAmount: expect.any(Number),
    currencyCode: expect.any(String),
    fractionDigits: expect.any(Number),
  });

  it(
    ...createBuilderSpec<
      TDiscountedLineItemPortion,
      TDiscountedLineItemPortionRest
    >(
      'rest',
      DiscountedLineItemPortion.random(),
      expect.objectContaining({
        discount: expect.objectContaining({
          typeId: 'cart-discount',
          id: expect.any(String),
        }),
        discountedAmount: expectGenericCentPrecisionMoney,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TDiscountedLineItemPortion,
      TDiscountedLineItemPortionGraphql
    >(
      'graphql',
      DiscountedLineItemPortion.random(),
      expect.objectContaining({
        discount: expect.objectContaining({
          key: expect.any(String),
          __typename: 'CartDiscount',
        }),
        discountRef: expect.objectContaining({
          typeId: 'cart-discount',
          id: expect.any(String),
          __typename: 'Reference',
        }),
        discountedAmount: expectGenericCentPrecisionMoney,
      })
    )
  );
});
