/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TShippingRateDraft, TShippingRateDraftGraphql } from '../types';
import * as ShippingRateDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShippingRateDraft, TShippingRateDraft>(
      'default',
      ShippingRateDraft.random(),
      expect.objectContaining({
        price: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        freeAbove: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        tiers: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingRateDraft, TShippingRateDraft>(
      'rest',
      ShippingRateDraft.random(),
      expect.objectContaining({
        price: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        freeAbove: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        tiers: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingRateDraft, TShippingRateDraftGraphql>(
      'graphql',
      ShippingRateDraft.random(),
      expect.objectContaining({
        price: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        freeAbove: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        tiers: expect.any(Array),
      })
    )
  );
});
