/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TDiscountedPrice, TDiscountedPriceGraphql } from './types';
import * as DiscountedPrice from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDiscountedPrice, TDiscountedPrice>(
      'default',
      DiscountedPrice.random(),
      expect.objectContaining({
        discount: {
          id: expect.any(String),
          typeId: 'product-discount',
        },
        value: {
          type: 'centPrecision',
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          fractionDigits: 2,
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountedPrice, TDiscountedPrice>(
      'rest',
      DiscountedPrice.random(),
      expect.objectContaining({
        discount: {
          id: expect.any(String),
          typeId: 'product-discount',
          obj: {
            id: expect.any(String),
          },
        },
        value: {
          type: 'centPrecision',
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          fractionDigits: 2,
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountedPrice, TDiscountedPriceGraphql>(
      'graphql',
      DiscountedPrice.random(),
      expect.objectContaining({
        discount: {
          id: expect.any(String),
          typeId: 'product-discount',
          __typename: 'Reference',
        },
        value: {
          type: 'centPrecision',
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          fractionDigits: 2,
          __typename: 'Money',
        },
        __typename: 'DiscountedPrice',
      })
    )
  );
});
