import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import vanillaCandle01 from './vanilla-candle-01';

describe(`with vanillaCandle01 preset`, () => {
  it(`should return a vanillaCandle01 preset`, () => {
    const vanillaCandle01Preset =
      vanillaCandle01().build<TProductVariantDraft>();
    expect(vanillaCandle01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird im Glas geliefert
      - 300 Gramm",
              "en-GB": "- Comes in glass jar
      - 300 grams",
              "en-US": "- Comes in glass jar
      - 300 grams",
            },
          },
          {
            "name": "search-color",
            "value": "yellow",
          },
          {
            "name": "search-finish",
            "value": "glass",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
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
            "value": "#F5F5DC",
          },
          {
            "name": "finish-code",
            "value": "transparent",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3879,
              "w": 5819,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4143,
              "w": 6214,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.2.jpeg",
          },
        ],
        "key": "vanillaCandle01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "VC-01",
      }
    `);
  });

  it(`should return a vanillaCandle01 preset when built for graphql`, () => {
    const vanillaCandle01PresetGraphql =
      vanillaCandle01().buildGraphql<TProductVariantDraftGraphql>();
    expect(vanillaCandle01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Comes in glass jar\\n- 300 grams","en-US":"- Comes in glass jar\\n- 300 grams","de-DE":"- Wird im Glas geliefert\\n- 300 Gramm"}",
          },
          {
            "name": "search-color",
            "value": ""yellow"",
          },
          {
            "name": "search-finish",
            "value": ""glass"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
          },
          {
            "name": "color-code",
            "value": ""#F5F5DC"",
          },
          {
            "name": "finish-code",
            "value": ""transparent"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3879,
              "width": 5819,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4143,
              "width": 6214,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.2.jpeg",
          },
        ],
        "key": "vanillaCandle01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 999,
                "currencyCode": "EUR",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
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
            "key": "999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 999,
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
            "key": "999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "VC-01",
      }
    `);
  });
});
