import type { TProductDraft } from '../../../types';
import cottonSilkBedsheet from './cotton-silk-bedsheet';
describe(`with cottonSilkBedsheet preset`, () => {
  it('should return a sample cottonSilkBedsheet product preset', () => {
    const cottonSilkBedsheetPreset =
      cottonSilkBedsheet().build<TProductDraft>();
    expect(cottonSilkBedsheetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese Bettwäsche aus Baumwollseide besteht aus einer Mischung aus Baumwoll- und Seidenfasern. Baumwolle ist für ihre Strapazierfähigkeit, Atmungsaktivität und Pflegeleichtigkeit bekannt. Seide hingegen ist bekannt für ihre Geschmeidigkeit, ihren strahlenden Glanz und ihr luxuriöses Gefühl. Durch die Kombination beider Fasersorten bieten wir ein Produkt an, das Haltbarkeit, Atmungsaktivität und Luxus in Einklang bringt. ",
          "en": undefined,
          "en-GB": "Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ",
          "en-US": "Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ",
          "fr": undefined,
        },
        "key": "cotton-silk-bedsheet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#FFF",
                "en-GB": "#FFF",
                "en-US": "#FFF",
              },
            },
            {
              "name": "new-arrival",
              "value": false,
            },
            {
              "name": "size",
              "value": {
                "en-GB": "Queen",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFF",
                "label": {
                  "de-DE": "Weiss",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4500,
                "w": 7500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_452514843-L0ubiJAn.jpeg",
            },
          ],
          "key": undefined,
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
                "centAmount": 1599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1599,
                "currencyCode": "GBP",
              },
            },
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
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CSKW-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bettwäsche aus Baumwollseide",
          "en": undefined,
          "en-GB": "Cotton Silk Bedsheet",
          "en-US": "Cotton Silk Bedsheet",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "bettwsche-aus-baumwollseide",
          "en": undefined,
          "en-GB": "cotton-silk-bedsheet",
          "en-US": "cotton-silk-bedsheet",
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
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#FFF",
                  "en-GB": "#FFF",
                  "en-US": "#FFF",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFF",
                  "label": {
                    "de-DE": "Weiss",
                    "en-GB": "White",
                    "en-US": "White",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4500,
                  "w": 7500,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_452514843-spHghd9J.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1299,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1299,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1299,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKW-0922",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#FFF",
                  "en-GB": "#FFF",
                  "en-US": "#FFF",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFF",
                  "label": {
                    "de-DE": "Weiss",
                    "en-GB": "White",
                    "en-US": "White",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4500,
                  "w": 7500,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_452514843-RXVUnvih.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1899,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1899,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1899,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKW-9822",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Lachs",
                  "en-GB": "Salmon",
                  "en-US": "Salmon",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#ffc0cb",
                  "en-GB": "#ffc0cb",
                  "en-US": "#ffc0cb",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFC0CB",
                  "label": {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-SYnKs_os.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-SqkvdFES.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1299,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1299,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1299,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKP-0934",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#ffc0cb",
                  "en-GB": "#ffc0cb",
                  "en-US": "#ffc0cb",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Lachs",
                  "en-GB": "Salmon",
                  "en-US": "Salmon",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Queen",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFC0CB",
                  "label": {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-YYm1GR3y.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-8eeyUKq9.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1599,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1599,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1599,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKP-0932",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#ffc0cb",
                  "en-GB": "#ffc0cb",
                  "en-US": "#ffc0cb",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Lachs",
                  "en-GB": "Salmon",
                  "en-US": "Salmon",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFC0CB",
                  "label": {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-bUbU_TKg.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-I0XNqDPK.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1899,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1899,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1899,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKP-083",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#bcbcbc",
                  "en-GB": "#bcbcbc",
                  "en-US": "#bcbcbc",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#808080",
                  "label": {
                    "de-DE": "Grau",
                    "en-GB": "Gray",
                    "en-US": "Gray",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_387796655-qnDiKfx7.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1299,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1299,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1299,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKG-92",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#bcbcbc",
                  "en-GB": "#bcbcbc",
                  "en-US": "#bcbcbc",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Queen",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#808080",
                  "label": {
                    "de-DE": "Grau",
                    "en-GB": "Gray",
                    "en-US": "Gray",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_387796655-BPilhC_x.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1599,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1599,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1599,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKG-023",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                  "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#bcbcbc",
                  "en-GB": "#bcbcbc",
                  "en-US": "#bcbcbc",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#808080",
                  "label": {
                    "de-DE": "Grau",
                    "en-GB": "Gray",
                    "en-US": "Gray",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_387796655-KFchHtXM.jpeg",
              },
            ],
            "key": undefined,
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
                  "centAmount": 1899,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1899,
                  "currencyCode": "GBP",
                },
              },
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
                  "centAmount": 1899,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "CSKG-2345",
          },
        ],
      }
    `);
  });
});
