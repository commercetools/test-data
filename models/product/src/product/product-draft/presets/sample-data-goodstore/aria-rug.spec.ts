import type { TProductDraft } from '../../../types';
import ariaRug from './aria-rug';
describe(`with ariaRug preset`, () => {
  it('should return a sample ariaRug product preset', () => {
    const ariaRugPreset = ariaRug().build<TProductDraft>();
    expect(ariaRugPreset).toMatchInlineSnapshot(`
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
      "key": "aria-rug",
      "name": {
            "de-DE": "Aria Teppich",
            "en-GB": "Aria Rug",
            "en-US": "Aria Rug"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "aria-teppich",
            "en-GB": "aria-rug",
            "en-US": "aria-rug"
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
          "attributes": [{"name":"product-description","value":{"de-DE":"Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.","en-GB":"The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.","en-US":"The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere."}},{"name":"color-filter","value":{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}},{"name":"productspec","value":{"en-GB":"- Dry clean only\n- 5ft x 7ft","de-DE":"- Nur chemische Reinigung\n- 5 Fuß x 7 Fuß","en-US":"- Dry clean only\n- 5ft x 7ft"}},{"name":"color","value":{"en-GB":"#DED6D1","de-DE":"#DED6D1","en-US":"#DED6D1"}},{"name":"colorlabel","value":{"en-GB":"Ivory","de-DE":"Elfenbein","en-US":"Ivory"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
