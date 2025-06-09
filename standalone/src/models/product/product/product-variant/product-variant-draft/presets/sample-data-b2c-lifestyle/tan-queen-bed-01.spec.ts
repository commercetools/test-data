import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import tanQueenBed01 from './tan-queen-bed-01';

describe(`with tanQueenBed01 preset`, () => {
  it(`should return a tanQueenBed01 preset`, () => {
    const tanQueenBed01Preset = tanQueenBed01().build<TProductVariantDraft>();
    expect(tanQueenBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten",
              "en-GB": "- Assembly included in delivery",
              "en-US": "- Assembly included in delivery",
            },
          },
          {
            "name": "search-color",
            "value": [
              "yellow",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "brown",
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
            "name": "finish-label",
            "value": {
              "de-DE": "Sattel braun",
              "en-GB": "Saddle Brown",
              "en-US": "Saddle Brown",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
          {
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Tan_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "tanQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LPQB-084",
      }
    `);
  });

  it(`should return a tanQueenBed01 preset when built for graphql`, () => {
    const tanQueenBed01PresetGraphql =
      tanQueenBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(tanQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
          },
          {
            "name": "search-color",
            "value": "["yellow"]",
          },
          {
            "name": "search-finish",
            "value": "["brown"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Tan_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "tanQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LPQB-084",
      }
    `);
  });
});
