import type { TProductDraft } from '../../../types';
import modernUpholsteredQueenBed from './modern-upholstered-queen-bed';

describe(`with modernUpholsteredQueenBed preset`, () => {
  it(`should return a modernUpholsteredQueenBed preset`, () => {
    const modernUpholsteredQueenBedPreset =
      modernUpholsteredQueenBed().build<TProductDraft>();
    expect(modernUpholsteredQueenBedPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ist ein luxuriöses und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Glamour und Raffinesse verleihen kann. Das Bett besteht aus einem Holzrahmen, der mit einem weichen und plüschigen Samtbezug überzogen ist. Das Kopfteil des Bettes ist der Mittelpunkt des Designs und weist ein getuftetes oder gestepptes Muster auf, das eine weiche und einladende Oberfläche zum Anlehnen bietet. Die Tuftings sind mit Messingnägeln akzentuiert, die dem Design einen Hauch von metallischem Glanz und Textur verleihen. Das Fußteil und die Seitengitter des Bettes sind ebenfalls mit demselben Samtstoff bezogen und mit Messingnagelköpfen verziert, wodurch ein einheitliches und stilvolles Erscheinungsbild entsteht. Die Beine des Bettes sind aus Holz. Die Größe des Bettes bietet reichlich Platz für eine komfortable Nachtruhe, während die luxuriöse Samtpolsterung und die Messingakzente dem Raum einen Hauch von Glamour und Raffinesse verleihen. Das Bett kann mit einer Reihe von Bettwaren und Accessoires, wie z. B. Plüschkissen und weichen Decken, kombiniert werden, um eine gemütliche und einladende Atmosphäre zu schaffen. Insgesamt ist ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ein atemberaubendes und stilvolles Möbelstück, das jedes Schlafzimmer in einen luxuriösen und eleganten Raum verwandeln kann. Die plüschige Polsterung, die raffinierten Tuftings und die metallischen Akzente machen es zu einem herausragenden Möbelstück, das Sie sicher beeindrucken und begeistern wird.",
          "en": undefined,
          "en-GB": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          "en-US": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          "fr": undefined,
        },
        "key": "modern-upholstered-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
                "en-GB": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
                "en-US": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
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
                  "de-DE": "Schwarz",
                  "en-GB": "Black",
                  "en-US": "Black",
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
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#FFFFFF",
                "en-GB": "#FFFFFF",
                "en-US": "#FFFFFF",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "#000000",
                "en-GB": "#000000",
                "en-US": "#000000",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 6000,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "modernUpholsteredQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 259900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 259900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MUQB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Modernes gepolstertes Queensize-Bett",
          "en": undefined,
          "en-GB": "Modern Upholstered Queen Bed",
          "en-US": "Modern Upholstered Queen Bed",
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
          "de-DE": "modernes-gepolstertes-queensize-bett",
          "en": undefined,
          "en-GB": "modern-upholstered-queen-bed",
          "en-US": "modern-upholstered-queen-bed",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a modernUpholsteredQueenBed preset when built for graphql`, () => {
    const modernUpholsteredQueenBedPresetGraphql =
      modernUpholsteredQueenBed().buildGraphql<TProductDraft>();
    expect(modernUpholsteredQueenBedPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          },
          {
            "locale": "de-DE",
            "value": "Ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ist ein luxuriöses und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Glamour und Raffinesse verleihen kann. Das Bett besteht aus einem Holzrahmen, der mit einem weichen und plüschigen Samtbezug überzogen ist. Das Kopfteil des Bettes ist der Mittelpunkt des Designs und weist ein getuftetes oder gestepptes Muster auf, das eine weiche und einladende Oberfläche zum Anlehnen bietet. Die Tuftings sind mit Messingnägeln akzentuiert, die dem Design einen Hauch von metallischem Glanz und Textur verleihen. Das Fußteil und die Seitengitter des Bettes sind ebenfalls mit demselben Samtstoff bezogen und mit Messingnagelköpfen verziert, wodurch ein einheitliches und stilvolles Erscheinungsbild entsteht. Die Beine des Bettes sind aus Holz. Die Größe des Bettes bietet reichlich Platz für eine komfortable Nachtruhe, während die luxuriöse Samtpolsterung und die Messingakzente dem Raum einen Hauch von Glamour und Raffinesse verleihen. Das Bett kann mit einer Reihe von Bettwaren und Accessoires, wie z. B. Plüschkissen und weichen Decken, kombiniert werden, um eine gemütliche und einladende Atmosphäre zu schaffen. Insgesamt ist ein mit Samtstoff gepolstertes Bett mit Messingnägeln und Tufting ein atemberaubendes und stilvolles Möbelstück, das jedes Schlafzimmer in einen luxuriösen und eleganten Raum verwandeln kann. Die plüschige Polsterung, die raffinierten Tuftings und die metallischen Akzente machen es zu einem herausragenden Möbelstück, das Sie sicher beeindrucken und begeistern wird.",
          },
          {
            "locale": "en-US",
            "value": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
          },
        ],
        "key": "modern-upholstered-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","en-GB":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","de-DE":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#FFFFFF","en-GB":"#FFFFFF","de-DE":"#FFFFFF"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6000,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "modernUpholsteredQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 259900,
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
              "key": "259900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 259900,
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
              "key": "259900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 259900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MUQB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Modern Upholstered Queen Bed",
          },
          {
            "locale": "de-DE",
            "value": "Modernes gepolstertes Queensize-Bett",
          },
          {
            "locale": "en-US",
            "value": "Modern Upholstered Queen Bed",
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
            "value": "modern-upholstered-queen-bed",
          },
          {
            "locale": "de-DE",
            "value": "modernes-gepolstertes-queensize-bett",
          },
          {
            "locale": "en-US",
            "value": "modern-upholstered-queen-bed",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
