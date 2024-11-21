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
            "name": "color",
            "value": {
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
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
            "name": "color",
            "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
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
