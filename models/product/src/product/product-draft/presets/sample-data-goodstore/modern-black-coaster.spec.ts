import type { TProductDraft } from '../../../types';
import modernBlackCoaster from './modern-black-coaster';
describe(`with modernBlackCoaster preset`, () => {
  it('should return a sample modernBlackCoaster product preset', () => {
    const modernBlackCoasterPreset =
      modernBlackCoaster().build<TProductDraft>();
    expect(modernBlackCoasterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "modern-black-coaster",
      "name": {
            "de-DE": "Moderner schwarzer Untersetzer",
            "en-GB": "Modern Black Coaster",
            "en-US": "Modern Black Coaster"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "moderner-schwarzer-untersetzer",
            "en-GB": "modern-black-coaster",
            "en-US": "modern-black-coaster"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Set includes 4 coasters","de-DE":"- Das Set enthält 4 Untersetzer","en-US":"- Set includes 4 coasters"}},{"name":"product-description","value":{"en-GB":"A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.","en-US":"A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.","de-DE":"Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet."}},{"name":"color","value":{"en-GB":"#000","de-DE":"#000","en-US":"#000"}},{"name":"colorlabel","value":{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}},{"name":"color-filter","value":{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
