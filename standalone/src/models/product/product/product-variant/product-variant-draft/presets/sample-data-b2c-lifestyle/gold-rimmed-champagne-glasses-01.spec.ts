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
            "name": "color",
            "value": {
              "de-DE": "Transparent:transparent",
              "en-GB": "Transparent:transparent",
              "en-US": "Transparent:transparent",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Gold:#FFD700",
              "en-GB": "Gold:#FFD700",
              "en-US": "Gold:#FFD700",
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
            "name": "color",
            "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Gold:#FFD700","de-DE":"Gold:#FFD700","en-US":"Gold:#FFD700"}",
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
