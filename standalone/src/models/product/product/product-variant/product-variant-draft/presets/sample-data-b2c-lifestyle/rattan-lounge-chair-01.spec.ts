import type { TProductVariantDraft } from '../../../types';
import rattanLoungeChair01 from './rattan-lounge-chair-01';

describe(`with rattanLoungeChair01 preset`, () => {
  it(`should return a rattanLoungeChair01 preset`, () => {
    const rattanLoungeChair01Preset =
      rattanLoungeChair01().build<TProductVariantDraft>();
    expect(rattanLoungeChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive 2 Kissen für Sitz und Rückenlehne",
              "en-GB": "- Includes 2 cushions for seat and backrest",
              "en-US": "- Includes 2 cushions for seat and backrest",
            },
          },
          {
            "name": "search-color",
            "value": [
              "white",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "yellow",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Antik-weiß",
              "en-GB": "Antique White",
              "en-US": "Antique White",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
            },
          },
          {
            "name": "color-code",
            "value": "#faebd7",
          },
          {
            "name": "finish-code",
            "value": "#F5F5DC",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4500,
              "w": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg",
          },
        ],
        "key": "rattanLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RLC-08",
      }
    `);
  });

  it(`should return a rattanLoungeChair01 preset when built for graphql`, () => {
    const rattanLoungeChair01PresetGraphql =
      rattanLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(rattanLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 2 cushions for seat and backrest","en-US":"- Includes 2 cushions for seat and backrest","de-DE":"- Inklusive 2 Kissen für Sitz und Rückenlehne"}",
          },
          {
            "name": "search-color",
            "value": "["white"]",
          },
          {
            "name": "search-finish",
            "value": "["yellow"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Antique White","de-DE":"Antik-weiß","en-US":"Antique White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "color-code",
            "value": ""#faebd7"",
          },
          {
            "name": "finish-code",
            "value": ""#F5F5DC"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4500,
              "width": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg",
          },
        ],
        "key": "rattanLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
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
            "key": "19900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
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
            "key": "19900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RLC-08",
      }
    `);
  });
});
