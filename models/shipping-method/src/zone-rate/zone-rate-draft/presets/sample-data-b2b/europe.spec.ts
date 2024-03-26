import type { TZoneRateDraft } from '../../../types';
import europe from './europe';

describe(`with europe preset`, () => {
  it(`should return a europe preset`, () => {
    const europePreset = europe().build<TZoneRateDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 5000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 500,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": {
              "centAmount": 5000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 500,
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
              "centAmount": 5000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 500,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": {
              "centAmount": 5000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 500,
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
