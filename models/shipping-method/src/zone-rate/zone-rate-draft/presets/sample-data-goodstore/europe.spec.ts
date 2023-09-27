import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import europe from './europe';

describe('with europe preset', () => {
  it(`should return a europe preset`, () => {
    const europePreset = europe().build<TZoneRateDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "GBP",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a europe preset when built for Graphql`, () => {
    const europePresetGraphql = europe().buildGraphql<TZoneRateDraftGraphql>();
    expect(europePresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "__typename": "Money",
              "centAmount": 10000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "__typename": "Money",
              "centAmount": 10000,
              "currencyCode": "GBP",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "__typename": "Reference",
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });
});
