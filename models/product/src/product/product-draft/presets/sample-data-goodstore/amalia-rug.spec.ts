import type { TProductDraft } from '../../../types';
import amaliaRug from './amalia-rug';
describe(`with amaliaRug preset`, () => {
  it('should return a sample amaliaRug product preset', () => {
    const amaliaRugPreset = amaliaRug().build<TProductDraft>();
    expect(amaliaRugPreset).toMatchInlineSnapshot(`
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
      "key": "amalia-rug",
      "name": {
            "de-DE": "Amalia Teppich",
            "en-GB": "Amalia Rug",
            "en-US": "Amalia Rug"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "amalia-teppich",
            "en-GB": "amalia-rug",
            "en-US": "amalia-rug"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- 6ft x 6ft","de-DE":"- 6 Fuß x 6 Fuß","en-US":"- 6ft x 6ft"}},{"name":"product-description","value":{"en-GB":"A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.","en-US":"A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.","de-DE":"Ein runder Plüsch-Akzent-Teppich ist so konzipiert, dass er weich und bequem unter den Füßen ist, mit einem dicken und dichten Flor, der ein weiches Gefühl vermittelt. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten."}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});