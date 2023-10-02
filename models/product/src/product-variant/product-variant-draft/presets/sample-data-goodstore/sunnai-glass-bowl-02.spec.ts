import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import sunnaiGlassBowl02 from './sunnai-glass-bowl-02';

describe(`with sunnaiGlassBowl02 preset`, () => {
  it(`should return a sunnaiGlassBowl02 preset`, () => {
    const sunnaiGlassBowl02Preset =
      sunnaiGlassBowl02().build<TProductVariantDraft>();
    expect(sunnaiGlassBowl02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": [
              {
                "en-GB": "Deep",
              },
            ],
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3288,
              "w": 4944,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_365013136-OKVQnVf-.jpeg",
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
              "centAmount": 899,
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
              "centAmount": 899,
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
              "centAmount": 899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SGB-02",
      }
    `);
  });

  it(`should return a sunnaiGlassBowl02 preset when built for graphql`, () => {
    const sunnaiGlassBowl02PresetGraphql =
      sunnaiGlassBowl02().buildGraphql<TProductVariantDraftGraphql>();
    expect(sunnaiGlassBowl02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "[{"en-GB":"Deep"}]",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3288,
              "width": 4944,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_365013136-OKVQnVf-.jpeg",
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
                "centAmount": 899,
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
                "centAmount": 899,
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
                "centAmount": 899,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SGB-02",
      }
    `);
  });
});
