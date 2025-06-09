import type { TProductVariantDraft } from '../../../types';
import braidedRug from './braided-rug-01';

describe(`with braidedRug preset`, () => {
  it(`should return a braidedRug preset`, () => {
    const braidedRugPreset = braidedRug().build<TProductVariantDraft>();
    expect(braidedRugPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "search-color",
            "value": [
              "yellow",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4720,
              "w": 4924,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3373,
              "w": 5060,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 3685,
              "w": 5527,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.2.jpeg",
          },
        ],
        "key": "braidedRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BR-0983",
      }
    `);
  });

  it(`should return a braidedRug preset when built for graphql`, () => {
    const braidedRugPresetGraphql =
      braidedRug().buildGraphql<TProductVariantDraft>();
    expect(braidedRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "search-color",
            "value": "["yellow"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4720,
              "width": 4924,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3373,
              "width": 5060,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 3685,
              "width": 5527,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.2.jpeg",
          },
        ],
        "key": "braidedRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9999,
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
            "key": "9999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9999,
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
            "key": "9999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BR-0983",
      }
    `);
  });
});
