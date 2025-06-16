import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernBookcase01 from './modern-bookcase-01';

describe(`with modernBookcase01 preset`, () => {
  it(`should return a modernBookcase01 preset`, () => {
    const modernBookcase01Preset =
      modernBookcase01().build<TProductVariantDraft>();
    expect(modernBookcase01Preset).toMatchInlineSnapshot(`
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
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            ],
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
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4600,
              "w": 2760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Bookcase-1.1.jpeg",
          },
        ],
        "key": "modernBookcase01",
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
        "sku": "MB-0973",
      }
    `);
  });

  it(`should return a modernBookcase01 preset when built for graphql`, () => {
    const modernBookcase01PresetGraphql =
      modernBookcase01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernBookcase01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten","en-US":"- Assembly included in delivery"}",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4600,
              "width": 2760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Bookcase-1.1.jpeg",
          },
        ],
        "key": "modernBookcase01",
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
        "sku": "MB-0973",
      }
    `);
  });
});
