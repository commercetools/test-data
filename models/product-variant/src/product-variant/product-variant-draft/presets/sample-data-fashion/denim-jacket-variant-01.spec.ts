import type { TProductVariantDraft } from '../../../types';
import denimJacketVariant01 from './denim-jacket-variant-01';

describe(`with denimJacketVariant01 preset`, () => {
  it(`should return a denimJacketVariant01 preset`, () => {
    const denimJacketVariant01Preset =
      denimJacketVariant01().build<TProductVariantDraft>();
    expect(denimJacketVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Normal",
              "label": "Normal",
            },
          },
          {
            "name": "cotton",
            "value": false,
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 225,
              "w": 225,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg",
          },
        ],
        "key": "996024",
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
              "centAmount": 10000,
              "currencyCode": "EUR",
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
              "centAmount": 10000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "996024",
      }
    `);
  });

  it(`should return a denimJacketVariant01 preset when built for graphql`, () => {
    const denimJacketVariant01PresetGraphql =
      denimJacketVariant01().buildGraphql<TProductVariantDraft>();
    expect(denimJacketVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Normal",
              "label": "Normal",
            },
          },
          {
            "name": "cotton",
            "value": false,
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 225,
              "w": 225,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg",
          },
        ],
        "key": "996024",
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
                "centAmount": 10000,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
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
              "centPrecision": {
                "centAmount": 10000,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          },
        ],
        "sku": "996024",
      }
    `);
  });
});
