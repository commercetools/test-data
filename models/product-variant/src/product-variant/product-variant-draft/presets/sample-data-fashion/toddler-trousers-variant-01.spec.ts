import { TProductVariantDraft } from '../../../types';
import toddlerTrousersVariant01 from './toddler-trousers-variant-02';

describe(`with toddlerTrousersVariant01 preset`, () => {
  it(`should return a toddlerTrousersVariant01 preset`, () => {
    const toddlerTrousersVariant01Preset =
      toddlerTrousersVariant01().build<TProductVariantDraft>();
    expect(toddlerTrousersVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": [],
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "name": "fit",
            "value": {
              "key": "Straight",
              "label": "Straight",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "White",
              "label": "White",
            },
          },
          {
            "name": "length",
            "value": {
              "key": "Ankle",
              "label": "Ankle",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 792,
              "w": 612,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
          },
        ],
        "key": "855485",
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
              "centAmount": 2599,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "855485",
      }
    `);
  });

  it(`should return a toddlerTrousersVariant01 preset when built for graphql`, () => {
    const toddlerTrousersVariant01PresetGraphql =
      toddlerTrousersVariant01().buildGraphql<TProductVariantDraft>();
    expect(toddlerTrousersVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": [],
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "fit",
            "value": {
              "key": "Straight",
              "label": "Straight",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "color",
            "value": {
              "key": "White",
              "label": "White",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "length",
            "value": {
              "key": "Ankle",
              "label": "Ankle",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 792,
              "w": 612,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
          },
        ],
        "key": "855485",
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
              "centAmount": 2599,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "855485",
      }
    `);
  });
});
