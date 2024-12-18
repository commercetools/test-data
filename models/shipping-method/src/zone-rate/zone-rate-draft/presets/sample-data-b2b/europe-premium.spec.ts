import type { TZoneRateDraft } from '../../../types';
import europe from './europe-premium';

describe(`with europe preset`, () => {
  it(`should return a europe preset`, () => {
    const europePreset = europe().build<TZoneRateDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 10000,
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

  it(`should return a europe preset when built for graphql`, () => {
    const europePresetGraphql = europe().buildGraphql<TZoneRateDraft>();
    expect(europePresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 10000,
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
