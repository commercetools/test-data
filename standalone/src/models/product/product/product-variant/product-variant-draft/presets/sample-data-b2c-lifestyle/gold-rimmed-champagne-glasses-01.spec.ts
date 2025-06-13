import type { TProductVariantDraft } from '../../../types';
import goldRimmedChampagneGlasses01 from './gold-rimmed-champagne-glasses-01';

describe(`with goldRimmedChampagneGlasses01 preset`, () => {
  it(`should return a goldRimmedChampagneGlasses01 preset`, () => {
    const goldRimmedChampagneGlasses01Preset =
      goldRimmedChampagneGlasses01().build<TProductVariantDraft>();
    expect(goldRimmedChampagneGlasses01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Set mit 5 Gläsern
      - Importierter Kristall
      - Goldpolitur an den Felgen",
              "en-GB": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
              "en-US": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Transparent",
                "en-GB": "Transparent",
                "en-US": "Transparent",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Transparent",
              "en-GB": "Transparent",
              "en-US": "Transparent",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "transparent",
              "en-GB": "transparent",
              "en-US": "transparent",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#FFD700",
              "en-GB": "#FFD700",
              "en-US": "#FFD700",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3288,
              "w": 2192,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4113,
              "w": 5143,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3435,
              "w": 6869,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.4.jpeg",
          },
          {
            "dimensions": {
              "h": 5077,
              "w": 8080,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.3.jpeg",
          },
        ],
        "key": "goldRimmedChampagneGlasses01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GRCG-01",
      }
    `);
  });

  it(`should return a goldRimmedChampagneGlasses01 preset when built for graphql`, () => {
    const goldRimmedChampagneGlasses01PresetGraphql =
      goldRimmedChampagneGlasses01().buildGraphql<TProductVariantDraft>();
    expect(goldRimmedChampagneGlasses01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims","de-DE":"- Set mit 5 Gläsern\\n- Importierter Kristall\\n- Goldpolitur an den Felgen","en-US":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3288,
              "width": 2192,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4113,
              "width": 5143,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3435,
              "width": 6869,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.4.jpeg",
          },
          {
            "dimensions": {
              "height": 5077,
              "width": 8080,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.3.jpeg",
          },
        ],
        "key": "goldRimmedChampagneGlasses01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3000,
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
            "key": "3000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3000,
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
            "key": "3000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GRCG-01",
      }
    `);
  });
});
