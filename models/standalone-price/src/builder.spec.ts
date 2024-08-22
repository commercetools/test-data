/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TStandalonePrice, TStandalonePriceGraphql } from './types';
import { StandalonePrice } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePrice>(
      'default',
      StandalonePrice.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
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
          id: expect.any(String),
          key: expect.any(String),
        }),
        channel: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
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
        expiresAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePrice>(
      'rest',
      StandalonePrice.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
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
          id: expect.any(String),
        }),
        channel: expect.objectContaining({
          typeId: 'channel',
          id: expect.any(String),
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

  it('should build properties for "graphql"', () => {
    const standalonePrice =
      StandalonePrice.random().buildGraphql<TStandalonePriceGraphql>();

    expect(standalonePrice).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
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
          id: expect.any(String),
          key: expect.any(String),
        }),
        channel: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
        }),
        customerGroupRef: expect.objectContaining({
          typeId: 'customer-group',
          id: expect.any(String),
        }),
        channelRef: expect.objectContaining({
          typeId: 'channel',
          id: expect.any(String),
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
        __typename: 'StandalonePrice',
      })
    );

    expect(standalonePrice.customerGroup?.id).toBe(
      standalonePrice.customerGroupRef?.id
    );
    expect(standalonePrice.channel?.id).toBe(standalonePrice.channelRef?.id);
  });

  it('should sync ids between customerGroup and customerGroupRef and between channel and channelRef in a GraphQL build', () => {
    const standalonePrice =
      StandalonePrice.random().buildGraphql<TStandalonePriceGraphql>();
    expect(standalonePrice.customerGroup?.id).toBe(
      standalonePrice.customerGroupRef?.id
    );
    expect(standalonePrice.channel?.id).toBe(standalonePrice.channelRef?.id);
  });
});
