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
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
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
            "value": {
              "de-DE": "#DAA520",
              "en-GB": "#DAA520",
              "en-US": "#DAA520",
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
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
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
            "value": "{"en-US":"#DAA520","en-GB":"#DAA520","de-DE":"#DAA520"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
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
