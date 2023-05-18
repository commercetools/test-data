import type { TProductVariantDraft } from '../../../types';
import sandalsVariant02 from './sandals-variant-02';

describe(`with sandalsAU variant preset`, () => {
  it(`should return a sandalsAU preset`, () => {
    const sandalsVariant02Preset =
      sandalsVariant02().build<TProductVariantDraft>();
    expect(sandalsVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Shoes",
              "label": "Shoes",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 230,
              "w": 219,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg",
          },
        ],
        "key": "148097",
        "prices": [
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1199,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
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
              "centAmount": 1000,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "148097",
      }
    `);
  });

  it(`should return a sandalsAU preset when built for graphql`, () => {
    const sandalsVariant02PresetGraphql =
      sandalsVariant02().buildGraphql<TProductVariantDraft>();
    expect(sandalsVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Shoes",
              "label": "Shoes",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 230,
              "w": 219,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg",
          },
        ],
        "key": "148097",
        "prices": [
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1199,
                "currencyCode": "AUD",
                "fractionDigits": 2,
                "type": "centPrecision",
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
                "centAmount": 1000,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          },
        ],
        "sku": "148097",
      }
    `);
  });
});
