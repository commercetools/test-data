import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import naturaRug01 from './natura-rug-01';

describe(`with naturaRug01 preset`, () => {
  it(`should return a naturaRug01 preset`, () => {
    const naturaRug01Preset = naturaRug01().build<TProductVariantDraft>();
    expect(naturaRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 6 Fuß x 6 Fuß",
              "en-GB": "- 6ft x 6ft",
              "en-US": "- 6ft x 6ft",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
            },
          },
          {
            "name": "color-code",
            "value": "#F5F5DC",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 8000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Natura_Rug-1.1.jpeg",
          },
        ],
        "key": "naturaRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39950GBP_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39950,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NR-09",
      }
    `);
  });

  it(`should return a naturaRug01 preset when built for graphql`, () => {
    const naturaRug01PresetGraphql =
      naturaRug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(naturaRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 6ft x 6ft","de-DE":"- 6 Fuß x 6 Fuß","en-US":"- 6ft x 6ft"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "color-code",
            "value": ""#F5F5DC"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 8000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Natura_Rug-1.1.jpeg",
          },
        ],
        "key": "naturaRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
                "currencyCode": "GBP",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39950GBP_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39950,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "NR-09",
      }
    `);
  });
});
