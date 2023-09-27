import type { TProductVariantDraft } from '../../../types';
import artDecoCoffeeTable01 from './art-deco-coffee-table-01';

describe(`with artDecoCoffeeTable01 preset`, () => {
  it(`should return a artDecoCoffeeTable01 preset`, () => {
    const artDecoCoffeeTable01Preset =
      artDecoCoffeeTable01().build<TProductVariantDraft>();
    expect(artDecoCoffeeTable01Preset).toMatchInlineSnapshot(`
      {
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
              "de-DE": "black",
              "en-GB": "black",
              "en-US": "black",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Black",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "gold",
              "en-GB": "gold",
              "en-US": "gold",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Brass",
              "en-GB": "Brass",
              "en-US": "Brass",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind.  Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert.  Insgesamt ist ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann.",
              "en-GB": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
              "en-US": "An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610491-JXS0tbLY.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610955-SDqxdoqq.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });

  it(`should return a artDecoCoffeeTable01 preset when built for graphql`, () => {
    const artDecoCoffeeTable01PresetGraphql =
      artDecoCoffeeTable01().buildGraphql<TProductVariantDraft>();
    expect(artDecoCoffeeTable01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","en-GB":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","de-DE":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled"}",
          },
          {
            "name": "color",
            "value": "{"en-US":"black","en-GB":"black","de-DE":"black"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Black","en-GB":"Black","de-DE":"Black"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"gold","en-GB":"gold","de-DE":"gold"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Brass","en-GB":"Brass","de-DE":"Brass"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.","en-US":"An Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room. The table features a geometric design, with sleek and angular lines that are characteristic of the Art Deco style.  The legs of the table are made from metal and have a shiny gold finish that adds a touch of opulence to the design. The tabletop is made from black marble, which has a natural veined pattern that gives each piece a unique and luxurious appearance. The marble top is smooth and polished, creating a sleek and sophisticated surface for displaying books, drinks, or decorative accessories.  The combination of gold and black creates a striking contrast that is both bold and elegant. The Art Deco style of the table is both timeless and glamorous, making it a perfect complement to a range of decor styles, from contemporary to vintage-inspired.  Overall, an Art Deco coffee table with gold legs and a black marble top is a luxurious and stylish addition to any living room. Its unique and striking design, combined with its high-quality materials and craftsmanship, make it a standout piece of furniture that can elevate the look and feel of any space.","de-DE":"Ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer einen Hauch von Glamour verleihen kann. Der Tisch verfügt über ein geometrisches Design mit schlanken und eckigen Linien, die charakteristisch für den Art-Deco-Stil sind.  Die Beine des Tisches sind aus Metall gefertigt und haben eine glänzende Goldoberfläche, die dem Design einen Hauch von Opulenz verleiht. Die Tischplatte besteht aus schwarzem Marmor, der ein natürliches geädertes Muster aufweist, das jedem Stück ein einzigartiges und luxuriöses Aussehen verleiht. Die Marmorplatte ist glatt und poliert und schafft eine glatte und raffinierte Oberfläche für die Präsentation von Büchern, Getränken oder dekorativen Accessoires.  Die Kombination aus Gold und Schwarz schafft einen auffälligen Kontrast, der sowohl mutig als auch elegant ist. Der Art-Deco-Stil des Tisches ist sowohl zeitlos als auch glamourös, was ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen macht, von zeitgenössisch bis hin zu Vintage-inspiriert.  Insgesamt ist ein Art-Deco-Couchtisch mit goldenen Beinen und einer schwarzen Marmorplatte eine luxuriöse und stilvolle Ergänzung für jedes Wohnzimmer. Sein einzigartiges und markantes Design, kombiniert mit seinen hochwertigen Materialien und seiner Handwerkskunst, machen es zu einem herausragenden Möbelstück, das das Erscheinungsbild jedes Raums aufwerten kann."}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610491-JXS0tbLY.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305610955-SDqxdoqq.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });
});
