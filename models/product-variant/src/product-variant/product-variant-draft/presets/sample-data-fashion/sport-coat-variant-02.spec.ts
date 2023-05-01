import { TProductVariantDraft } from '../../../types';
import sportCoatVariant02 from './sport-coat-variant-02';

describe(`with sportCoatVariant02 preset`, () => {
  it(`should return a sportCoatVariant02 preset`, () => {
    const sportCoatVariant02Preset =
      sportCoatVariant02().build<TProductVariantDraft>();
    expect(sportCoatVariant02Preset).toMatchInlineSnapshot(`
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 150,
              "w": 150,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg",
          },
        ],
        "key": "692458",
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
              "centAmount": 20000,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "692458",
      }
    `);
  });

  it(`should return a sportCoatVariant02 preset when built for graphql`, () => {
    const sportCoatVariant02PresetGraphql =
      sportCoatVariant02().buildGraphql<TProductVariantDraft>();
    expect(sportCoatVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": undefined,
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "sleeve_length",
            "value": {
              "key": "Normal",
              "label": "Normal",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 150,
              "w": 150,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg",
          },
        ],
        "key": "692458",
        "prices": [
          {
            "__typename": "ProductPriceDataInput",
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
              "__typename": "MoneyInput",
              "centAmount": 20000,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "692458",
      }
    `);
  });
});
