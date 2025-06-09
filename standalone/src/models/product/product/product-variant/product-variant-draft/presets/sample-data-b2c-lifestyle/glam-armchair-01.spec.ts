import type { TProductVariantDraft } from '../../../types';
import glamArmchair01 from './glam-armchair-01';

describe(`with glamArmchair01 preset`, () => {
  it(`should return a glamArmchair01 preset`, () => {
    const glamArmchair01Preset = glamArmchair01().build<TProductVariantDraft>();
    expect(glamArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung
      - Kissen inklusive",
              "en-GB": "- Dry clean only
      - Pillow included",
              "en-US": "- Dry clean only
      - Pillow included",
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
              "gold",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Goldene Rute",
              "en-GB": "Golden Rod",
              "en-US": "Golden Rod",
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
            "value": "#DAA520",
          },
          {
            "name": "finish-code",
            "value": "#FFD700",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Glam_Armchair-1.1.jpeg",
          },
        ],
        "key": "glamArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GARM-093",
      }
    `);
  });

  it(`should return a glamArmchair01 preset when built for graphql`, () => {
    const glamArmchair01PresetGraphql =
      glamArmchair01().buildGraphql<TProductVariantDraft>();
    expect(glamArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only\\n- Pillow included","de-DE":"- Nur chemische Reinigung\\n- Kissen inklusive","en-US":"- Dry clean only\\n- Pillow included"}",
          },
          {
            "name": "search-color",
            "value": "["yellow"]",
          },
          {
            "name": "search-finish",
            "value": "["gold"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Golden Rod","de-DE":"Goldene Rute","en-US":"Golden Rod"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-code",
            "value": ""#DAA520"",
          },
          {
            "name": "finish-code",
            "value": ""#FFD700"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Glam_Armchair-1.1.jpeg",
          },
        ],
        "key": "glamArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
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
            "key": "59900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
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
            "key": "59900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GARM-093",
      }
    `);
  });
});
