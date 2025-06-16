import type { TProductVariantDraft } from '../../../types';
import brunoChair from './bruno-chair-01';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductVariantDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Stuhl",
              "en-GB": "- Includes 1 chair",
              "en-US": "- Includes 1 chair",
            },
          },
          {
            "name": "search-color",
            "value": "blue",
          },
          {
            "name": "search-finish",
            "value": "brown",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Königs blau",
              "en-GB": "Royal Blue",
              "en-US": "Royal Blue",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Sattel braun",
              "en-GB": "Saddle Brown",
              "en-US": "Saddle Brown",
            },
          },
          {
            "name": "color-code",
            "value": "#4169E1",
          },
          {
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4315,
              "w": 6473,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Bruno_Chair-1.1.jpeg",
          },
        ],
        "key": "brunoChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BARM-03",
      }
    `);
  });

  it(`should return a brunoChair preset when built for graphql`, () => {
    const brunoChairPresetGraphql =
      brunoChair().buildGraphql<TProductVariantDraft>();
    expect(brunoChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
          },
          {
            "name": "search-color",
            "value": ""blue"",
          },
          {
            "name": "search-finish",
            "value": ""brown"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Royal Blue","de-DE":"Königs blau","en-US":"Royal Blue"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": ""#4169E1"",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4315,
              "width": 6473,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Bruno_Chair-1.1.jpeg",
          },
        ],
        "key": "brunoChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7999,
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
            "key": "7999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7999,
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
            "key": "7999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BARM-03",
      }
    `);
  });
});
