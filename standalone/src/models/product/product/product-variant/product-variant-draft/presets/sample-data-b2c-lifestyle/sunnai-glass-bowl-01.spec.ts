import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import sunnaiGlassBowl01 from './sunnai-glass-bowl-01';

describe(`with sunnaiGlassBowl01 preset`, () => {
  it(`should return a sunnaiGlassBowl01 preset`, () => {
    const sunnaiGlassBowl01Preset =
      sunnaiGlassBowl01().build<TProductVariantDraft>();
    expect(sunnaiGlassBowl01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": [
              {
                "en-GB": "Round",
              },
            ],
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
              "h": 3739,
              "w": 5381,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
          },
        ],
        "key": "sunnaiGlassBowl01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });

  it(`should return a sunnaiGlassBowl01 preset when built for graphql`, () => {
    const sunnaiGlassBowl01PresetGraphql =
      sunnaiGlassBowl01().buildGraphql<TProductVariantDraftGraphql>();
    expect(sunnaiGlassBowl01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "[{"en-GB":"Round"}]",
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
              "height": 3739,
              "width": 5381,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
          },
        ],
        "key": "sunnaiGlassBowl01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
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
            "key": "799GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
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
            "key": "799USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });
});
