import type { TProductVariantDraft } from '../../../types';
import classicServingTray01 from './classic-serving-tray-01';

describe(`with classicServingTray01 preset`, () => {
  it(`should return a classicServingTray01 preset`, () => {
    const classicServingTray01Preset =
      classicServingTray01().build<TProductVariantDraft>();
    expect(classicServingTray01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Aus lebensmittelechtem Kunststoff",
              "en-GB": "- Made of food-grade plastic",
              "en-US": "- Made of food-grade plastic",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#FFFFFF",
              "en-GB": "#FFFFFF",
              "en-US": "#FFFFFF",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.2.jpeg",
          },
        ],
        "key": "classicServingTray01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CST-01",
      }
    `);
  });

  it(`should return a classicServingTray01 preset when built for graphql`, () => {
    const classicServingTray01PresetGraphql =
      classicServingTray01().buildGraphql<TProductVariantDraft>();
    expect(classicServingTray01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Made of food-grade plastic","de-DE":"- Aus lebensmittelechtem Kunststoff","en-US":"- Made of food-grade plastic"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#FFFFFF","en-GB":"#FFFFFF","de-DE":"#FFFFFF"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.2.jpeg",
          },
        ],
        "key": "classicServingTray01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
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
            "key": "299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
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
            "key": "299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CST-01",
      }
    `);
  });
});
