/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TPriceDraft, TPriceDraftGraphql } from '../types';
import * as PriceDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPriceDraft, TPriceDraft>(
      'default',
      PriceDraft.random(),
      expect.objectContaining({
        key: null,
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        country: expect.any(String),
        customerGroup: null,
        channel: null,
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: null,
        discounted: null,
        custom: null,
        recurrencePolicy: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceDraft, TPriceDraft>(
      'rest',
      PriceDraft.random(),
      expect.objectContaining({
        key: null,
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        country: expect.any(String),
        customerGroup: null,
        channel: null,
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: null,
        discounted: null,
        custom: null,
        recurrencePolicy: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceDraft, TPriceDraftGraphql>(
      'graphql',
      PriceDraft.random(),
      expect.objectContaining({
        key: null,
        value: expect.objectContaining({
          centPrecision: {
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          },
        }),
        country: expect.any(String),
        customerGroup: null,
        channel: null,
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: null,
        discounted: null,
        custom: null,
        recurrencePolicy: null,
      })
    )
  );
});
