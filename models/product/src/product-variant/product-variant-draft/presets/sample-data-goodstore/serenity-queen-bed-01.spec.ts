import type { TProductVariantDraft } from '../../../types';
import serenityQueenBed01 from './serenity-queen-bed-01';

describe(`with serenityQueenBed01 preset`, () => {
  it(`should return a serenityQueenBed01 preset`, () => {
    const serenityQueenBed01Preset =
      serenityQueenBed01().build<TProductVariantDraft>();
    expect(serenityQueenBed01Preset).toMatchInlineSnapshot(`
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
            "name": "colorlabel",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Gray",
              "en-US": "Gray",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#DFDFDD",
              "en-GB": "#DFDFDD",
              "en-US": "#DFDFDD",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2000,
              "w": 2000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Serenity_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "IQB-09",
      }
    `);
  });

  it(`should return a serenityQueenBed01 preset when built for graphql`, () => {
    const serenityQueenBed01PresetGraphql =
      serenityQueenBed01().buildGraphql<TProductVariantDraft>();
    expect(serenityQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#DFDFDD","de-DE":"#DFDFDD","en-US":"#DFDFDD"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2000,
              "width": 2000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Serenity_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 99900,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 99900,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 99900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "IQB-09",
      }
    `);
  });
});
