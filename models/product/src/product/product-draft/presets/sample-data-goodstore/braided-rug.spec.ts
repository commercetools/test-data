import type { TProductDraft } from '../../../types';
import braidedRug from './braided-rug';
describe(`with braidedRug preset`, () => {
  it('should return a sample braidedRug product preset', () => {
    const braidedRugPreset = braidedRug().build<TProductDraft>();
    expect(braidedRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "braided-rug",
      "name": {
            "de-DE": "Geflochtener Teppich",
            "en-GB": "Braided Rug",
            "en-US": "Braided Rug"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "geflochtener-teppich",
            "en-GB": "braided-rug",
            "en-US": "braided-rug"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"product-description","value":{"en-GB":"A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.","en-US":"A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.","de-DE":"Ein geflochtener runder Juteteppich für das Wohnzimmer ist ein stilvolles und natürliches Wohnaccessoire, das jedem Raum Wärme und Struktur verleiht. Der Teppich besteht aus strapazierfähigen und nachhaltigen Jutefasern, die zu einer runden Form zusammengeflochten sind.  Die geflochtene Konstruktion des Teppichs erzeugt eine strukturierte Oberfläche, die sowohl weich als auch strapazierfähig ist. Die Naturfasern der Jute verleihen dem Teppich ein warmes und erdiges Aussehen und machen ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu rustikal und unkonventionell.  Die runde Form des Teppichs ist ideal, um einen gemütlichen und intimen Sitzbereich in einem größeren Wohnzimmer zu schaffen oder um einem kleineren Raum visuelles Interesse zu verleihen.  Insgesamt ist ein geflochtener runder Juteteppich eine stilvolle und natürliche Möglichkeit, einem Wohnzimmer Wärme und Textur zu verleihen. Seine langlebige und nachhaltige Konstruktion, kombiniert mit seinem warmen und erdigen Aussehen, machen es zu einem vielseitigen und zeitlosen Wohnaccessoire, an dem Sie jahrelang Freude haben werden."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}},{"name":"color","value":{"en-GB":"#FFEEB2","de-DE":"#FFEEB2","en-US":"#FFEEB2"}},{"name":"colorlabel","value":{"en-GB":"Jute","de-DE":"Jute","en-US":"Jute"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
