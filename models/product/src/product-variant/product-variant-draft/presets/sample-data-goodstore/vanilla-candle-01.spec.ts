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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3879,
              "w": 5819,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308745883-yypEo7X3.jpeg",
          },
          {
            "dimensions": {
              "h": 4143,
              "w": 6214,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_310474610-dhOQAd9h.jpeg",
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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
        ],
        "images": [
          {
            "dimensions": {
              "height": 3879,
              "width": 5819,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308745883-yypEo7X3.jpeg",
          },
          {
            "dimensions": {
              "height": 4143,
              "width": 6214,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_310474610-dhOQAd9h.jpeg",
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
            "key": undefined,
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
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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