import type { TProductDraft } from '../../../types';
import artDecoCoffeeTable from './art-deco-coffee-table';

describe(`with artDecoCoffeeTable preset`, () => {
  it(`should return a artDecoCoffeeTable preset`, () => {
    const artDecoCoffeeTablePreset =
      artDecoCoffeeTable().build<TProductDraft>();
    expect(artDecoCoffeeTablePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind. Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert. Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann.",
          "en": undefined,
          "en-GB": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
          "en-US": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
          "fr": undefined,
        },
        "key": "art-deco-coffee-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
                "en-GB": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
                "en-US": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Schwarz:#000000",
                "en-GB": "Black:#000000",
                "en-US": "Black:#000000",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Gold:#FFD700",
                "en-GB": "Gold:#FFD700",
                "en-US": "Gold:#FFD700",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.2.jpeg",
            },
          ],
          "key": "artDecoCoffeeTable01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "320000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 320000,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "320000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 320000,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "320000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 320000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ADCT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Couchtisch im Art-Deco-Stil",
          "en": undefined,
          "en-GB": "Art Deco Coffee Table",
          "en-US": "Art Deco Coffee Table",
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
          "de-DE": "art-deco-couchtisch",
          "en": undefined,
          "en-GB": "art-deco-coffe-table",
          "en-US": "art-deco-coffe-table",
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

  it(`should return a artDecoCoffeeTable preset when built for graphql`, () => {
    const artDecoCoffeeTablePresetGraphql =
      artDecoCoffeeTable().buildGraphql<TProductDraft>();
    expect(artDecoCoffeeTablePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
          },
          {
            "locale": "en-US",
            "value": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind. Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert. Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann.",
          },
        ],
        "key": "art-deco-coffee-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","en-GB":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","de-DE":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled"}",
            },
            {
              "name": "color",
              "value": "{"en-US":"Black:#000000","en-GB":"Black:#000000","de-DE":"Schwarz:#000000"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Gold:#FFD700","en-GB":"Gold:#FFD700","de-DE":"Gold:#FFD700"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.2.jpeg",
            },
          ],
          "key": "artDecoCoffeeTable01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "320000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 320000,
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
              "key": "320000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 320000,
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
              "key": "320000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 320000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "ADCT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Art Deco Coffee Table",
          },
          {
            "locale": "en-GB",
            "value": "Art Deco Coffee Table",
          },
          {
            "locale": "de-DE",
            "value": "Couchtisch im Art-Deco-Stil",
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
            "value": "art-deco-coffe-table",
          },
          {
            "locale": "en-GB",
            "value": "art-deco-coffe-table",
          },
          {
            "locale": "de-DE",
            "value": "art-deco-couchtisch",
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
