import type { TProductDraft } from '../../../types';
import canelaThreeSeaterSofa from './canela-three-seater-sofa';

describe(`with canelaThreeSeaterSofa preset`, () => {
  it(`should return a canelaThreeSeaterSofa preset`, () => {
    const canelaThreeSeaterSofaPreset =
      canelaThreeSeaterSofa().build<TProductDraft>();
    expect(canelaThreeSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial ist mit einer Schutzbeschichtung behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht.",
          "en": undefined,
          "en-GB": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
          "en-US": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
          "fr": undefined,
        },
        "key": "canela-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Lederpolsterung
      - 3-Sitzer",
                "en-GB": "- Leather upholstery 
      - 3 seater",
                "en-US": "- Leather upholstery 
      - 3 seater",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Peru:#CD853F",
                "en-GB": "Peru:#CD853F",
                "en-US": "Peru:#CD853F",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Bräunen:#D2B48C",
                "en-GB": "Tan:#D2B48C",
                "en-US": "Tan:#D2B48C",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3353,
                "w": 5029,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 780,
                "w": 1170,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
            },
          ],
          "key": "canelaThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900EUR",
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
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CTSS-098",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Canela 3-Sitzer-Sofa",
          "en": undefined,
          "en-GB": "Canela Three-Seater Sofa",
          "en-US": "Canela Three-Seater Sofa",
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
          "de-DE": "canela-3-sitzer-sofa",
          "en": undefined,
          "en-GB": "canela-three-seater-sofa",
          "en-US": "canela-three-seater-sofa",
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

  it(`should return a canelaThreeSeaterSofa preset when built for graphql`, () => {
    const canelaThreeSeaterSofaPresetGraphql =
      canelaThreeSeaterSofa().buildGraphql<TProductDraft>();
    expect(canelaThreeSeaterSofaPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
          },
          {
            "locale": "en-US",
            "value": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial ist mit einer Schutzbeschichtung behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht.",
          },
        ],
        "key": "canela-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Leather upholstery \\n- 3 seater","de-DE":"- Lederpolsterung\\n- 3-Sitzer","en-US":"- Leather upholstery \\n- 3 seater"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Peru:#CD853F","de-DE":"Peru:#CD853F","en-US":"Peru:#CD853F"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3353,
                "width": 5029,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 780,
                "width": 1170,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
            },
          ],
          "key": "canelaThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "259900EUR",
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
          "sku": "CTSS-098",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Canela Three-Seater Sofa",
          },
          {
            "locale": "en-GB",
            "value": "Canela Three-Seater Sofa",
          },
          {
            "locale": "de-DE",
            "value": "Canela 3-Sitzer-Sofa",
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
            "locale": "en-US",
            "value": "canela-three-seater-sofa",
          },
          {
            "locale": "en-GB",
            "value": "canela-three-seater-sofa",
          },
          {
            "locale": "de-DE",
            "value": "canela-3-sitzer-sofa",
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
