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
            "name": "color",
            "value": {
              "de-DE": "Beige:#F5F5DC",
              "en-GB": "Beige:#F5F5DC",
              "en-US": "Beige:#F5F5DC",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Glas:transparent",
              "en-GB": "Glass:transparent",
              "en-US": "Glass:transparent",
            },
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
            "name": "color",
            "value": "{"en-US":"Beige:#F5F5DC","en-GB":"Beige:#F5F5DC","de-DE":"Beige:#F5F5DC"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"Glass:transparent","en-GB":"Glass:transparent","de-DE":"Glas:transparent"}",
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
