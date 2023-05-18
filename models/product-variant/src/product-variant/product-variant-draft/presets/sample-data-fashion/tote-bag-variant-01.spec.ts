import type { TProductVariantDraft } from '../../../types';
import toteBagVariant01 from './tote-bag-variant-01';

describe(`with toteBagVariant01 preset`, () => {
  it(`should return a toteBagVariant01 preset`, () => {
    const toteBagVariant01Preset =
      toteBagVariant01().build<TProductVariantDraft>();
    expect(toteBagVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Bag",
              "label": "Bag",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 800,
              "w": 766,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png",
          },
        ],
        "key": "718289",
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
              "centAmount": 13999,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "718289",
      }
    `);
  });

  it(`should return a toteBagVariant01 preset when built for graphql`, () => {
    const toteBagVariant01PresetGraphql =
      toteBagVariant01().buildGraphql<TProductVariantDraft>();
    expect(toteBagVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Bag",
              "label": "Bag",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 800,
              "width": 766,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png",
          },
        ],
        "key": "718289",
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
                "centAmount": 13999,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          },
        ],
        "sku": "718289",
      }
    `);
  });
});
