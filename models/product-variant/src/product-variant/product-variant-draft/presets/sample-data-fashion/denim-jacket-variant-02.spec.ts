import type { TProductVariantDraft } from '../../../types';
import denimJacketVariant02 from './denim-jacket-variant-02';

describe(`with denimJacketVariant02 preset`, () => {
  it(`should return a denimJacketVariant02 preset`, () => {
    const denimJacketVariant02Preset =
      denimJacketVariant02().build<TProductVariantDraft>();
    expect(denimJacketVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Extra Long",
              "label": "Extra Long",
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
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg",
          },
        ],
        "key": "996025",
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
        "sku": "996025",
      }
    `);
  });

  it(`should return a denimJacketVariant02 preset when built for graphql`, () => {
    const denimJacketVariant02PresetGraphql =
      denimJacketVariant02().buildGraphql<TProductVariantDraft>();
    expect(denimJacketVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Extra Long",
              "label": "Extra Long",
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
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg",
          },
        ],
        "key": "996025",
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
        "sku": "996025",
      }
    `);
  });
});
