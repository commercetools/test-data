import type { TProductVariantDraft } from '../../../types';
import skinnyJeansVariant01 from './skinny-jeans-variant-01';

describe(`with skinnyJeansVariant01 preset`, () => {
  it(`should return a skinnyJeansVariant01 preset`, () => {
    const skinnyJeansVariant01Preset =
      skinnyJeansVariant01().build<TProductVariantDraft>();
    expect(skinnyJeansVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "fit",
            "value": {
              "key": "Slim",
              "label": "Slim",
            },
          },
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 275,
              "w": 183,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg",
          },
        ],
        "key": "396594",
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
              "centAmount": 4999,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "396594",
      }
    `);
  });

  it(`should return a skinnyJeansVariant01 preset when built for graphql`, () => {
    const skinnyJeansVariant01PresetGraphql =
      skinnyJeansVariant01().buildGraphql<TProductVariantDraft>();
    expect(skinnyJeansVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": undefined,
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "fit",
            "value": {
              "key": "Slim",
              "label": "Slim",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 275,
              "w": 183,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg",
          },
        ],
        "key": "396594",
        "prices": [
          {
            "__typename": "ProductPriceDataInput",
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
              "__typename": "MoneyInput",
              "centAmount": 4999,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "396594",
      }
    `);
  });
});
