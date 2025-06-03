import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug02 from './meadow-rug-02';

describe(`with meadowRug02 preset`, () => {
  it(`should return a meadowRug02 preset`, () => {
    const meadowRug02Preset = meadowRug02().build<TProductVariantDraft>();
    expect(meadowRug02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 3 Fuß x 5 Fuß",
              "en-GB": "- 3ft x 5ft",
              "en-US": "- 3ft x 5ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Schwarz:#000000",
              "en-GB": "Black:#000000",
              "en-US": "Black:#000000",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Meadow_Rug-2.1.jpeg",
          },
        ],
        "key": "meadowRug02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MR-08",
      }
    `);
  });

  it(`should return a meadowRug02 preset when built for graphql`, () => {
    const meadowRug02PresetGraphql =
      meadowRug02().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Meadow_Rug-2.1.jpeg",
          },
        ],
        "key": "meadowRug02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
                "currencyCode": "EUR",
              },
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
                "currencyCode": "GBP",
              },
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MR-08",
      }
    `);
  });
});
