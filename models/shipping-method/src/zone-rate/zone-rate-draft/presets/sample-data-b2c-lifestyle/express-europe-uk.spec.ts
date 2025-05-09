import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import expressEuropeUk from './express-europe-uk';

describe('with express europe and uk preset', () => {
  it(`should return an express preset`, () => {
    const expressPreset = expressEuropeUk().build<TZoneRateDraft>();
    expect(expressPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "GBP",
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

  it(`should return an express preset when built for Graphql`, () => {
    const expressPresetGraphql =
      expressEuropeUk().buildGraphql<TZoneRateDraftGraphql>();
    expect(expressPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "GBP",
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
});
