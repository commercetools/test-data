/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TStandalonePriceDraft, TStandalonePriceDraftGraphql } from '../types';
import { StandalonePriceDraft } from '..';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraft>(
      'default',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
        country: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        channel: expect.objectContaining({
          typeId: 'channel',
        }),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: expect.arrayContaining([
          expect.objectContaining({
            minimumQuantity: expect.any(Number),
            value: expect.objectContaining({
              type: 'centPrecision',
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: null,
        active: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraft>(
      'rest',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
        country: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        channel: expect.objectContaining({
          typeId: 'channel',
        }),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: expect.arrayContaining([
          expect.objectContaining({
            minimumQuantity: expect.any(Number),
            value: expect.objectContaining({
              type: 'centPrecision',
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: null,
        active: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraftGraphql>(
      'graphql',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
        country: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        channel: expect.objectContaining({
          typeId: 'channel',
        }),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: expect.arrayContaining([
          expect.objectContaining({
            minimumQuantity: expect.any(Number),
            value: expect.objectContaining({
              type: 'centPrecision',
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: null,
        active: expect.any(Boolean),
      })
    )
  );
});
