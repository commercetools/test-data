import { TProductVariantDraft } from '../../../types';
import toteBagVariant02 from './tote-bag-variant-02';

describe(`with toteBagVariant02 preset`, () => {
  it(`should return a toteBagVariant02 preset`, () => {
    const toteBagVariant02Preset =
      toteBagVariant02().build<TProductVariantDraft>();
    expect(toteBagVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": [],
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
              "w": 675,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png",
          },
        ],
        "key": "124965",
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
              "centAmount": 17500,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "124965",
      }
    `);
  });

  it(`should return a toteBagVariant02 preset when built for graphql`, () => {
    const toteBagVariant02PresetGraphql =
      toteBagVariant02().buildGraphql<TProductVariantDraft>();
    expect(toteBagVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": [],
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "type",
            "value": {
              "key": "Bag",
              "label": "Bag",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 800,
              "w": 675,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png",
          },
        ],
        "key": "124965",
        "prices": [
          {
            "__typename": "ProductPriceDataInput",
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
              "__typename": "MoneyInput",
              "centAmount": 17500,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "124965",
      }
    `);
  });
});