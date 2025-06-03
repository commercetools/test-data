import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import expressGermanyAndUkAndUs from './express-germany-uk-us';

describe('with express europe and uk preset', () => {
  it(`should return an express preset`, () => {
    const expressPreset = expressGermanyAndUkAndUs().build<TZoneRateDraft>();
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
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "germany-uk-us",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return an express preset when built for Graphql`, () => {
    const expressPresetGraphql =
      expressGermanyAndUkAndUs().buildGraphql<TZoneRateDraftGraphql>();
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
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "germany-uk-us",
          "typeId": "zone",
        },
      }
    `);
  });
});
