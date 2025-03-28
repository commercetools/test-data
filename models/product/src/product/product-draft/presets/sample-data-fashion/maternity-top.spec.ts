import type { TProductDraft } from '../../../types';
import maternityTop from './maternity-top';

describe(`with maternityTop preset`, () => {
  it('should return a sample maternityTop product preset', () => {
    const maternityTopPreset = maternityTop().build<TProductDraft>();
    expect(maternityTopPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tops-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "maternity_top",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": {
                "key": "Small",
                "label": "Small",
              },
            },
            {
              "name": "color",
              "value": {
                "key": "Green",
                "label": "Green",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 300,
                "w": 262,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
            },
          ],
          "key": "118716",
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
                "centAmount": 2695,
                "currencyCode": "EUR",
              },
            },
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
              },
            },
          ],
          "sku": "118716",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Maternity Top",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-maternity-top",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Medium",
                  "label": "Medium",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
              },
            ],
            "key": "118717",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                },
              },
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
                },
              },
            ],
            "sku": "118717",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
              },
            ],
            "key": "118718",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                },
              },
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
                },
              },
            ],
            "sku": "118718",
          },
        ],
      }
    `);
  });

  it('should return a sample prom dress product preset when built for graphql', () => {
    const maternityTopPresetGraphql =
      maternityTop().buildGraphql<TProductDraft>();
    expect(maternityTopPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tops-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "maternity_top",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": "{"key":"Small","label":"Small"}",
            },
            {
              "name": "color",
              "value": "{"key":"Green","label":"Green"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 300,
                "width": 262,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
            },
          ],
          "key": "118716",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                },
              },
            },
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
                "centPrecision": {
                  "centAmount": 2500,
                  "currencyCode": "AUD",
                },
              },
            },
          ],
          "sku": "118716",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Maternity Top",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sample-maternity-top",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": "{"key":"Medium","label":"Medium"}",
              },
              {
                "name": "color",
                "value": "{"key":"Green","label":"Green"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 300,
                  "width": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
              },
            ],
            "key": "118717",
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
                    "centAmount": 2695,
                    "currencyCode": "EUR",
                  },
                },
              },
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
                  "centPrecision": {
                    "centAmount": 2500,
                    "currencyCode": "AUD",
                  },
                },
              },
            ],
            "sku": "118717",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": "{"key":"Large","label":"Large"}",
              },
              {
                "name": "color",
                "value": "{"key":"Green","label":"Green"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 300,
                  "width": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
              },
            ],
            "key": "118718",
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
                    "centAmount": 2695,
                    "currencyCode": "EUR",
                  },
                },
              },
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
                  "centPrecision": {
                    "centAmount": 2500,
                    "currencyCode": "AUD",
                  },
                },
              },
            ],
            "sku": "118718",
            "staged": true,
          },
        ],
      }
    `);
  });
});
