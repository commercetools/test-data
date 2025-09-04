import { restPreset, graphqlPreset } from './with-usd-currency';

describe('With USD Currency preset', () => {
  it('[REST] should set all specified fields correctly', () => {
    const shippingRateDraftPreset = restPreset().build();

    expect(shippingRateDraftPreset).toEqual(
      expect.objectContaining({
        price: expect.objectContaining({
          currencyCode: 'USD',
          centAmount: expect.any(Number),
        }),
        freeAbove: expect.objectContaining({
          currencyCode: 'USD',
          centAmount: expect.any(Number),
        }),
        isMatching: expect.any(Boolean),
      })
    );
  });
  it('[Graphql] should set all specified fields correctly', () => {
    const shippingRateDraftPreset = graphqlPreset().build();

    expect(shippingRateDraftPreset).toEqual(
      expect.objectContaining({
        tiers: [],
        price: expect.objectContaining({
          currencyCode: 'USD',
          centAmount: expect.any(Number),
        }),
        freeAbove: expect.objectContaining({
          currencyCode: 'USD',
          centAmount: expect.any(Number),
        }),
        isMatching: expect.any(Boolean),
      })
    );
  });
});
