import type { TProductVariantDraft } from '../../../types';
import summerDressVariant02 from './summer-dress-variant-02';

describe(`with summerDressVariant02 preset`, () => {
  it(`should return a summerDressVariant02 preset`, () => {
    const summerDressVariant02Preset =
      summerDressVariant02().build<TProductVariantDraft>();
    expect(summerDressVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "key": "Pink",
              "label": "Pink",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 254,
              "w": 199,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png",
          },
        ],
        "key": "439502",
        "prices": [
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
              "centAmount": 7500,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "439502",
      }
    `);
  });

  it(`should return a summerDressVariant02 preset when built for graphql`, () => {
    const summerDressVariant02PresetGraphql =
      summerDressVariant02().buildGraphql<TProductVariantDraft>();
    expect(summerDressVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "key": "Pink",
              "label": "Pink",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 254,
              "w": 199,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png",
          },
        ],
        "key": "439502",
        "prices": [
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
                "centAmount": 7500,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          },
        ],
        "sku": "439502",
      }
    `);
  });
});
