import type { TProductDraft } from '../../../types';
import modernUpholsteredTwinBed from './modern-upholstered-twin-bed';

describe(`with modernUpholsteredTwinBed preset`, () => {
  it(`should return a modernUpholsteredTwinBed preset`, () => {
    const modernUpholsteredTwinBedPreset =
      modernUpholsteredTwinBed().build<TProductDraft>();
    expect(modernUpholsteredTwinBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Doppelbett mit Stoffbezug im modernen Stil ist ein elegantes und stilvolles Möbelstück, das jedem Schlafzimmer einen Hauch von Raffinesse verleihen kann. Das Bett zeichnet sich durch ein einfaches und minimalistisches Design aus, mit klaren Linien und geometrischen Formen, die für den modernen Stil charakteristisch sind. Der Rahmen des Bettes ist aus Holz gefertigt und hat ein niedriges Profil, das einen schlanken und modernen Look erzeugt. Das Kopfteil, das Fußteil und die Seitengitter des Bettes sind mit Stoff bezogen und bieten eine weiche und bequeme Oberfläche zum Anlehnen und Ausruhen. Das Bett hat eine Größe von zwei Einzelbetten und ist daher ideal für kleinere Schlafzimmer oder Gästezimmer. Es kann mit einer Reihe von Bettwaren und Accessoires kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen, der Ihren persönlichen Stil widerspiegelt. Insgesamt ist ein Doppelbett mit Stoffbezug im modernen Stil ein elegantes und raffiniertes Möbelstück, das jedes Schlafzimmer aufwerten kann. Das schlichte, aber stilvolle Design in Kombination mit der bequemen und weichen Polsterung machen es zu einem perfekten Ort, um sich stilvoll auszuruhen und zu entspannen.",
          "en": undefined,
          "en-GB": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
          "en-US": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
          "fr": undefined,
        },
        "key": "modern-upholstered-twin-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
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
              "name": "search-finish",
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
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Helles Schiefer grau",
                "en-GB": "Lightslate Grey",
                "en-US": "Lightslate Gray",
              },
            },
            {
              "name": "color-code",
              "value": "#FFFFFF",
            },
            {
              "name": "finish-code",
              "value": "#778899",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3000,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 3000,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.3.jpeg",
            },
          ],
          "key": "modernUpholsteredTwinBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 45000,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 45000,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 45000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MUTB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Modernes gepolstertes Doppelbett",
          "en": undefined,
          "en-GB": "Modern Upholstered Twin Bed",
          "en-US": "Modern Upholstered Twin Bed",
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
          "de-DE": "modernes-gepolstertes-einzelbett",
          "en": undefined,
          "en-GB": "modern-upholstered-twin-bed",
          "en-US": "modern-upholstered-twin-bed",
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
                  "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grün",
                    "en-GB": "Green",
                    "en-US": "Green",
                  },
                ],
              },
              {
                "name": "search-finish",
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
                  "de-DE": "See grün",
                  "en-GB": "Sea Green",
                  "en-US": "Sea Green",
                },
              },
              {
                "name": "finish-label",
                "value": {
                  "de-DE": "Helles Schiefer grau",
                  "en-GB": "Lightslate Grey",
                  "en-US": "Lightslate Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#2E8B57",
              },
              {
                "name": "finish-code",
                "value": "#778899",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.2.jpeg",
              },
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.3.jpeg",
              },
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.1.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MUTB-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
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
                "name": "search-finish",
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
                  "de-DE": "Grau",
                  "en-GB": "Grey",
                  "en-US": "Gray",
                },
              },
              {
                "name": "finish-label",
                "value": {
                  "de-DE": "Helles Schiefer grau",
                  "en-GB": "Lightslate Grey",
                  "en-US": "Lightslate Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#808080",
              },
              {
                "name": "finish-code",
                "value": "#778899",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4000,
                  "w": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.2.jpeg",
              },
              {
                "dimensions": {
                  "h": 4000,
                  "w": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.3.jpeg",
              },
              {
                "dimensions": {
                  "h": 4000,
                  "w": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.1.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed03",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MUTB-03",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                  "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
                },
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Gelb",
                    "en-GB": "Yellow",
                    "en-US": "Yellow",
                  },
                ],
              },
              {
                "name": "search-finish",
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
                  "de-DE": "Bräunen",
                  "en-GB": "Tan",
                  "en-US": "Tan",
                },
              },
              {
                "name": "finish-label",
                "value": {
                  "de-DE": "Helles Schiefer grau",
                  "en-GB": "Lightslate Grey",
                  "en-US": "Lightslate Gray",
                },
              },
              {
                "name": "color-code",
                "value": "#D2B48C",
              },
              {
                "name": "finish-code",
                "value": "#778899",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.2.jpeg",
              },
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3000,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.3.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed04",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 45000,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MUTB-04",
          },
        ],
      }
    `);
  });

  it(`should return a modernUpholsteredTwinBed preset when built for graphql`, () => {
    const modernUpholsteredTwinBedPresetGraphql =
      modernUpholsteredTwinBed().buildGraphql<TProductDraft>();
    expect(modernUpholsteredTwinBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Doppelbett mit Stoffbezug im modernen Stil ist ein elegantes und stilvolles Möbelstück, das jedem Schlafzimmer einen Hauch von Raffinesse verleihen kann. Das Bett zeichnet sich durch ein einfaches und minimalistisches Design aus, mit klaren Linien und geometrischen Formen, die für den modernen Stil charakteristisch sind. Der Rahmen des Bettes ist aus Holz gefertigt und hat ein niedriges Profil, das einen schlanken und modernen Look erzeugt. Das Kopfteil, das Fußteil und die Seitengitter des Bettes sind mit Stoff bezogen und bieten eine weiche und bequeme Oberfläche zum Anlehnen und Ausruhen. Das Bett hat eine Größe von zwei Einzelbetten und ist daher ideal für kleinere Schlafzimmer oder Gästezimmer. Es kann mit einer Reihe von Bettwaren und Accessoires kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen, der Ihren persönlichen Stil widerspiegelt. Insgesamt ist ein Doppelbett mit Stoffbezug im modernen Stil ein elegantes und raffiniertes Möbelstück, das jedes Schlafzimmer aufwerten kann. Das schlichte, aber stilvolle Design in Kombination mit der bequemen und weichen Polsterung machen es zu einem perfekten Ort, um sich stilvoll auszuruhen und zu entspannen.",
          },
          {
            "locale": "en-US",
            "value": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
          },
        ],
        "key": "modern-upholstered-twin-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
            },
            {
              "name": "color-code",
              "value": ""#FFFFFF"",
            },
            {
              "name": "finish-code",
              "value": ""#778899"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3000,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 3000,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.3.jpeg",
            },
          ],
          "key": "modernUpholsteredTwinBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 45000,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 45000,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "45000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 45000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MUTB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Modern Upholstered Twin Bed",
          },
          {
            "locale": "de-DE",
            "value": "Modernes gepolstertes Doppelbett",
          },
          {
            "locale": "en-US",
            "value": "Modern Upholstered Twin Bed",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-GB",
            "value": "modern-upholstered-twin-bed",
          },
          {
            "locale": "de-DE",
            "value": "modernes-gepolstertes-einzelbett",
          },
          {
            "locale": "en-US",
            "value": "modern-upholstered-twin-bed",
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
                "name": "productspec",
                "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Sea Green","de-DE":"See grün","en-US":"Sea Green"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
              },
              {
                "name": "color-code",
                "value": ""#2E8B57"",
              },
              {
                "name": "finish-code",
                "value": ""#778899"",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.2.jpeg",
              },
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.3.jpeg",
              },
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.1.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "EUR",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "GBP",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MUTB-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Grey","de-DE":"Grau","en-US":"Gray"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
              },
              {
                "name": "color-code",
                "value": ""#808080"",
              },
              {
                "name": "finish-code",
                "value": ""#778899"",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 4000,
                  "width": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.2.jpeg",
              },
              {
                "dimensions": {
                  "height": 4000,
                  "width": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.3.jpeg",
              },
              {
                "dimensions": {
                  "height": 4000,
                  "width": 4000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.1.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed03",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "EUR",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "GBP",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MUTB-03",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
              },
              {
                "name": "color-code",
                "value": ""#D2B48C"",
              },
              {
                "name": "finish-code",
                "value": ""#778899"",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.2.jpeg",
              },
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 3000,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.3.jpeg",
              },
            ],
            "key": "modernUpholsteredTwinBed04",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "EUR",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "GBP",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "45000USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 45000,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MUTB-04",
          },
        ],
      }
    `);
  });
});
