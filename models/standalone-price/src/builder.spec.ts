/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TStandalonePrice, TStandalonePriceGraphql } from './types';
import { StagedStandalonePrice, StandalonePrice } from '.';

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

  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePriceGraphql>(
      'graphql',
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
    )
  );

  it('should sync ids between customerGroup and customerGroupRef and between channel and channelRef in a GraphQL build', () => {
    const standalonePrice =
      StandalonePrice.random().buildGraphql<TStandalonePriceGraphql>();

    expect(standalonePrice.customerGroup?.id).toBe(
      standalonePrice.customerGroupRef?.id
    );
    expect(standalonePrice.channel?.id).toBe(standalonePrice.channelRef?.id);
  });

  describe('StandalonePrice builder currency code consistency', () => {
    it('should have all currency codes tied to the main value currency code in REST', () => {
      const standalonePrice = StandalonePrice.random()
        .staged(StagedStandalonePrice.random())
        .buildRest<TStandalonePrice>();

      const mainCurrencyCode = standalonePrice.value.currencyCode;

      standalonePrice.tiers?.forEach((tier) => {
        expect(tier.value.currencyCode).toBe(mainCurrencyCode);
      });
      expect(standalonePrice.staged?.value.currencyCode).toBe(mainCurrencyCode);
    });

    it('should have all currency codes tied to the main value currency code in GraphQL', () => {
      const standalonePrice = StandalonePrice.random()
        .staged(StagedStandalonePrice.random())
        .buildGraphql<TStandalonePriceGraphql>();

      const mainCurrencyCode = standalonePrice.value.currencyCode;

      standalonePrice.tiers?.forEach((tier) => {
        expect(tier.value.currencyCode).toBe(mainCurrencyCode);
      });
      expect(standalonePrice.staged?.value.currencyCode).toBe(mainCurrencyCode);
    });
  });
});
