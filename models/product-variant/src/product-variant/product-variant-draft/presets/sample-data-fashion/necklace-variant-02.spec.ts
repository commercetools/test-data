import { TProductVariantDraft } from '../../../types';
import necklaceVariant02 from './necklace-variant-02';

describe(`with necklace variant preset`, () => {
  it(`should return a necklace preset`, () => {
    const necklaceVariant02Preset =
      necklaceVariant02().build<TProductVariantDraft>();
    expect(necklaceVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": [],
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Jewelry",
              "label": "Jewelry",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 241,
              "w": 209,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
          },
        ],
        "key": "42610",
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
              "centAmount": 1575,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "42610",
      }
    `);
  });

  it(`should return a necklace preset when built for graphql`, () => {
    const necklaceVariant02PresetGraphql =
      necklaceVariant02().buildGraphql<TProductVariantDraft>();
    expect(necklaceVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": [],
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "type",
            "value": {
              "key": "Jewelry",
              "label": "Jewelry",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 241,
              "w": 209,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
          },
        ],
        "key": "42610",
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
              "centAmount": 1575,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "42610",
      }
    `);
  });
});
