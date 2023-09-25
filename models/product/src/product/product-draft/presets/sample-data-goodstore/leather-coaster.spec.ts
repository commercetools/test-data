import type { TProductDraft } from '../../../types';
import leatherCoaster from './leather-coaster';
describe(`with leatherCoaster preset`, () => {
  it('should return a sample leatherCoaster product preset', () => {
    const leatherCoasterPreset = leatherCoaster().build<TProductDraft>();
    expect(leatherCoasterPreset).toMatchInlineSnapshot(`
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
      "key": "leather-coaster",
      "name": {
            "de-DE": "Untersetzer aus Leder",
            "en-GB": "Leather Coaster",
            "en-US": "Leather Coaster"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "untersetzer-aus-leder",
            "en-GB": "leather-coaster",
            "en-US": "leather-coaster"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 4 coasters","de-DE":"- Enthält 4 Untersetzer","en-US":"- Includes 4 coasters"}},{"name":"product-description","value":{"en-GB":"A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.","en-US":"A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.","de-DE":"Ein runder Lederuntersetzer ist so konzipiert, dass er unter einem Getränk platziert werden kann, um die darunter liegende Oberfläche vor Feuchtigkeit und Hitze zu schützen. Es misst etwa 4 Zoll im Durchmesser und besteht aus hochwertigem Ledermaterial. Die Kanten des Untersetzers sind mit Messing veredelt. Die Unterseite des Untersetzers ist mit einem rutschfesten Material versehen, um ein Verrutschen auf glatten Oberflächen zu verhindern."}},{"name":"color","value":{"en-GB":"#000","de-DE":"#000","en-US":"#000"}},{"name":"colorlabel","value":{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}},{"name":"color-filter","value":{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
