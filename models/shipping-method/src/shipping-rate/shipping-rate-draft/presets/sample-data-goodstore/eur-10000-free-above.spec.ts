import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur10000FreeAbove from './eur-10000-free-above';

describe('with eur10000 preset', () => {
  it('should return a eur10000FreeAbove preset', () => {
    const eur10000FreeAbovePreset =
      eur10000FreeAbove().build<TShippingRateDraft>();
    expect(eur10000FreeAbovePreset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 0,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "tiers": [],
      }
    `);
  });

  it('should return a eur10000FreeAbove preset when built for graphql', () => {
    const eur10000FreeAbovePresetGraphql =
      eur10000FreeAbove().buildGraphql<TShippingRateDraftGraphql>();
    expect(eur10000FreeAbovePresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "__typename": "Money",
          "centAmount": 0,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "price": {
          "__typename": "Money",
          "centAmount": 10000,
          "currencyCode": "EUR",
          "fractionDigits": 2,
          "type": "centPrecision",
        },
        "tiers": [],
      }
    `);
  });
});
