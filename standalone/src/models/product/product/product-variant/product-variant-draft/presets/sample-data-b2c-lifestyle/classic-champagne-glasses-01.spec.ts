import type { TProductVariantDraft } from '../../../types';
import classicChampagneGlasses01 from './classic-champagne-glasses-01';

describe(`with classicChampagneGlasses01 preset`, () => {
  it(`should return a classicChampagneGlasses01 preset`, () => {
    const classicChampagneGlasses01Preset =
      classicChampagneGlasses01().build<TProductVariantDraft>();
    expect(classicChampagneGlasses01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Set aus 5 Gläsern
      - Hochwertiges Glas
      - Zerbrechlich",
              "en-GB": "- Set of 5 glasses
      - Premium glass
      - Fragile",
              "en-US": "- Set of 5 glasses
      - Premium glass
      - Fragile",
            },
          },
          {
            "name": "new-arrival",
            "value": true,
          },
          {
            "name": "search-color",
            "value": "transparent",
          },
          {
            "name": "search-finish",
            "value": "glass",
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
              "de-DE": "Glas",
              "en-GB": "Glass",
              "en-US": "Glass",
            },
          },
          {
            "name": "color-code",
            "value": "transparent",
          },
          {
            "name": "finish-code",
            "value": "transparent",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4101,
              "w": 5468,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.4.jpeg",
          },
          {
            "dimensions": {
              "h": 4149,
              "w": 2571,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 5464,
              "w": 3643,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 2733,
              "w": 1659,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.3.jpeg",
          },
        ],
        "key": "classicChampagneGlasses01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCG-01",
      }
    `);
  });

  it(`should return a classicChampagneGlasses01 preset when built for graphql`, () => {
    const classicChampagneGlasses01PresetGraphql =
      classicChampagneGlasses01().buildGraphql<TProductVariantDraft>();
    expect(classicChampagneGlasses01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Set of 5 glasses\\n- Premium glass\\n- Fragile","en-GB":"- Set of 5 glasses\\n- Premium glass\\n- Fragile","de-DE":"- Set aus 5 Gläsern\\n- Hochwertiges Glas\\n- Zerbrechlich"}",
          },
          {
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "search-color",
            "value": ""transparent"",
          },
          {
            "name": "search-finish",
            "value": ""glass"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
          },
          {
            "name": "color-code",
            "value": ""transparent"",
          },
          {
            "name": "finish-code",
            "value": ""transparent"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4101,
              "width": 5468,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.4.jpeg",
          },
          {
            "dimensions": {
              "height": 4149,
              "width": 2571,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 5464,
              "width": 3643,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 2733,
              "width": 1659,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.3.jpeg",
          },
        ],
        "key": "classicChampagneGlasses01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCG-01",
      }
    `);
  });
});
