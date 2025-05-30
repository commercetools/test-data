/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { ReferenceGraphql } from '../reference';
import type { TPrice, TPriceGraphql } from './types';
import * as Price from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPrice, TPrice>(
      'default',
      Price.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: null,
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: 'centPrecision',
          fractionDigits: expect.any(Number),
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
    ...createBuilderSpec<TPrice, TPrice>(
      'rest',
      Price.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: null,
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: 'centPrecision',
          fractionDigits: expect.any(Number),
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
    ...createBuilderSpec<TPrice, TPriceGraphql>(
      'graphql',
      Price.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: null,
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: 'centPrecision',
          fractionDigits: expect.any(Number),
          __typename: 'Money',
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
        recurrencePolicyRef: null,
        __typename: 'ProductPrice',
      })
    )
  );

  it('should sync ids between recurrencePolicy and recurrencePolicyRef in a GraphQL build', () => {
    const price = Price.random()
      .recurrencePolicy(
        ReferenceGraphql.random().typeId('recurrence-policy').id('123')
      )
      .buildGraphql<TPriceGraphql>();

    expect(price.recurrencePolicy?.id).toBe(price.recurrencePolicyRef?.id);
  });
});
