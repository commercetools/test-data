import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur1299 from './eur-1299';

describe('with eur1299 preset', () => {
  it('should return a eur1299 preset', () => {
    const eur1299Preset = eur1299().build<TShippingRateDraft>();
    expect(eur1299Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 15000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 1299,
          "currencyCode": "EUR",
        },
        "tiers": undefined,
      }
    `);
  });

  it('should return a eur1299 preset when built for graphql', () => {
    const eur1299PresetGraphql =
      eur1299().buildGraphql<TShippingRateDraftGraphql>();
    expect(eur1299PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ShippingRateDraft",
        "freeAbove": {
          "__typename": "BaseMoneyInput",
          "centAmount": 15000,
          "currencyCode": "EUR",
        },
        "price": {
          "__typename": "BaseMoneyInput",
          "centAmount": 1299,
          "currencyCode": "EUR",
        },
        "tiers": undefined,
      }
    `);
  });
});
