/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TPriceTier, TPriceTierGraphql } from './types';
import * as PriceTier from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPriceTier, TPriceTier>(
      'default',
      PriceTier.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceTier, TPriceTier>(
      'rest',
      PriceTier.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceTier, TPriceTierGraphql>(
      'graphql',
      PriceTier.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
          __typename: 'Money',
        }),
        __typename: 'ProductPriceTier',
      })
    )
  );
});
