import type { TProductVariantDraft } from '../../../types';
import sparkleChampagneGlass01 from './sparkle-champagne-glass-01';

describe(`with sparkleChampagneGlass01 preset`, () => {
  it(`should return a sparkleChampagneGlass01 preset`, () => {
    const sparkleChampagneGlass01Preset =
      sparkleChampagneGlass01().build<TProductVariantDraft>();
    expect(sparkleChampagneGlass01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Gläser",
              "en-GB": "- Set includes 6 glasses",
              "en-US": "- Set includes 6 glasses",
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
                "de-DE": "Glas",
                "en-GB": "Glass",
                "en-US": "Glass",
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
              "de-DE": "Glas",
              "en-GB": "Glass",
              "en-US": "Glass",
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
              "de-DE": "transparent",
              "en-GB": "transparent",
              "en-US": "transparent",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sparkle_Champagne_Glass-1.1.jpeg",
          },
        ],
        "key": "sparkleChampagneGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SCG-09",
      }
    `);
  });

  it(`should return a sparkleChampagneGlass01 preset when built for graphql`, () => {
    const sparkleChampagneGlass01PresetGraphql =
      sparkleChampagneGlass01().buildGraphql<TProductVariantDraft>();
    expect(sparkleChampagneGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","en-US":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
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
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sparkle_Champagne_Glass-1.1.jpeg",
          },
        ],
        "key": "sparkleChampagneGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4599,
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
            "key": "4599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4599,
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
            "key": "4599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SCG-09",
      }
    `);
  });
});
