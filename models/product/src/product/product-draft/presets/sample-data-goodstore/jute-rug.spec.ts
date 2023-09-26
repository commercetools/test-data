import type { TProductDraft } from '../../../types';
import juteRug from './jute-rug';
describe(`with juteRug preset`, () => {
  it('should return a sample juteRug product preset', () => {
    const juteRugPreset = juteRug().build<TProductDraft>();
    expect(juteRugPreset).toMatchInlineSnapshot(`
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
      "key": "jute-rug",
      "name": {
            "de-DE": "Jute-Teppich",
            "en-GB": "Jute Rug",
            "en-US": "Jute Rug"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "jute-teppich",
            "en-GB": "jute-rug",
            "en-US": "jute-rug"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- 10ft x 12ft","de-DE":"- 10 Fuß x 12 Fuß","en-US":"- 10ft x 12ft"}},{"name":"product-description","value":{"en-GB":"A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.","en-US":"A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.","de-DE":"Ein Juteteppich ist eine Art Teppich aus Naturfasern, die aus der Jutepflanze gewonnen werden. Jute ist eine lange, weiche und glänzende Pflanzenfaser, die zu starken Fäden gesponnen und dann zu Textilien gewebt wird. Juteteppiche sind bekannt für ihre Langlebigkeit und ihr natürliches Aussehen, was sie zu einer beliebten Wahl für diejenigen macht, die einen Hauch von Natur in ihr Zuhause bringen möchten.  Da Jute eine Naturfaser ist, ist sie umweltfreundlich und nachhaltig. Es kann jedoch anfällig für Flecken und Wasserschäden sein, daher sollten Juteteppiche in wenig frequentierten Bereichen oder Räumen verwendet werden, die nicht viel Feuchtigkeit ausgesetzt sind. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen ein natürlicher, erdiger Look gewünscht wird.  Insgesamt ist ein Juteteppich eine schöne und umweltfreundliche Ergänzung für jedes Zuhause. Seine natürlichen Fasern und sein erdiges Aussehen machen es zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}},{"name":"finishlabel","value":{"en-GB":"Jute","de-DE":"Jute","en-US":"Jute"}},{"name":"finish","value":{"en-GB":"#EEDA99","de-DE":"#EEDA99","en-US":"#EEDA99"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
