import type { TProductVariantDraft } from '../../../types';
import sandalsVariant01 from './sandals-variant-01';

describe(`with sandals variant preset`, () => {
  it(`should return a sandals preset`, () => {
    const sandalsVariant01Preset =
      sandalsVariant01().build<TProductVariantDraft>();
    expect(sandalsVariant01Preset).toMatchInlineSnapshot(`
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
              "h": 222,
              "w": 227,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png",
          },
        ],
        "key": "148096",
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
              "centAmount": 2500,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
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
              "centAmount": 3000,
              "currencyCode": "EUR",
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
              "centAmount": 2799,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "148096",
      }
    `);
  });

  it(`should return a sandals preset when built for graphql`, () => {
    const sandalsVariant01PresetGraphql =
      sandalsVariant01().buildGraphql<TProductVariantDraft>();
    expect(sandalsVariant01PresetGraphql).toMatchInlineSnapshot(`
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
              "h": 222,
              "w": 227,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png",
          },
        ],
        "key": "148096",
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
              "centAmount": 2500,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
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
              "centAmount": 3000,
              "currencyCode": "EUR",
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
              "centAmount": 2799,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "148096",
      }
    `);
  });
});
