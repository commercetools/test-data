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
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-code",
              "value": "#FFFFFF",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4500,
                "w": 7500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-1.1.jpeg",
            },
          ],
          "key": "cottonSilkBedsheet01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1599EUR",
              "recurrencePolicy": undefined,
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
              "key": "1599GBP",
              "recurrencePolicy": undefined,
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
              "key": "1599USD",
              "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Weiß",
                    "en-GB": "White",
                    "en-US": "White",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
              {
                "name": "color-code",
                "value": "#FFFFFF",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4500,
                  "w": 7500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-2.1.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1299EUR",
                "recurrencePolicy": undefined,
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
                "key": "1299GBP",
                "recurrencePolicy": undefined,
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
                "key": "1299USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Weiß",
                    "en-GB": "White",
                    "en-US": "White",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
              {
                "name": "color-code",
                "value": "#FFFFFF",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4500,
                  "w": 7500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-3.1.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet03",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1899EUR",
                "recurrencePolicy": undefined,
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
                "key": "1899GBP",
                "recurrencePolicy": undefined,
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
                "key": "1899USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell rosa",
                  "en-GB": "Light Pink",
                  "en-US": "Light Pink",
                },
              },
              {
                "name": "color-code",
                "value": "#FFB6C1",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.2.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet04",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1299EUR",
                "recurrencePolicy": undefined,
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
                "key": "1299GBP",
                "recurrencePolicy": undefined,
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
                "key": "1299USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "Queen",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell rosa",
                  "en-GB": "Light Pink",
                  "en-US": "Light Pink",
                },
              },
              {
                "name": "color-code",
                "value": "#FFB6C1",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.2.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet05",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1599EUR",
                "recurrencePolicy": undefined,
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
                "key": "1599GBP",
                "recurrencePolicy": undefined,
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
                "key": "1599USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell rosa",
                  "en-GB": "Light Pink",
                  "en-US": "Light Pink",
                },
              },
              {
                "name": "color-code",
                "value": "#FFB6C1",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3627,
                  "w": 5589,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3228,
                  "w": 5216,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.2.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet06",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1899EUR",
                "recurrencePolicy": undefined,
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
                "key": "1899GBP",
                "recurrencePolicy": undefined,
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
                "key": "1899USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "Twin",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grau",
                    "en-GB": "Grey",
                    "en-US": "Gray",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell grau",
                  "en-GB": "Light Grey",
                  "en-US": "Light Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#D3D3D3",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-7.1.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet07",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1299EUR",
                "recurrencePolicy": undefined,
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
                "key": "1299GBP",
                "recurrencePolicy": undefined,
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
                "key": "1299USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "Queen",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grau",
                    "en-GB": "Grey",
                    "en-US": "Gray",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell grau",
                  "en-GB": "Light Grey",
                  "en-US": "Light Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#D3D3D3",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-8.1.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet08",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1599EUR",
                "recurrencePolicy": undefined,
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
                "key": "1599GBP",
                "recurrencePolicy": undefined,
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
                "key": "1599USD",
                "recurrencePolicy": undefined,
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
                "name": "size",
                "value": {
                  "en-GB": "King",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grau",
                    "en-GB": "Grey",
                    "en-US": "Gray",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Hell grau",
                  "en-GB": "Light Grey",
                  "en-US": "Light Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#D3D3D3",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3848,
                  "w": 6016,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-9.1.jpeg",
              },
            ],
            "key": "cottonSilkBedsheet09",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1899EUR",
                "recurrencePolicy": undefined,
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
                "key": "1899GBP",
                "recurrencePolicy": undefined,
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
                "key": "1899USD",
                "recurrencePolicy": undefined,
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
