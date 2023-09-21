import type { TProductDraft } from '../../../types';
import fawnArmchair from './fawn-armchair';
describe(`with fawnArmchair preset`, () => {
  it('should return a sample fawnArmchair product preset', () => {
    const fawnArmchairPreset = fawnArmchair().build<TProductDraft>();
    expect(fawnArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "fawn-armchair",
      "name": {
            "de-DE": "Fawn Sessel",
            "en-GB": "Fawn Armchair",
            "en-US": "Fawn Armchair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "fawn-sessel",
            "en-GB": "fawn-armchair",
            "en-US": "fawn-armchair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Leather requires special care","de-DE":"- Leder erfordert besondere Pflege","en-US":"- Leather requires special care"}},{"name":"product-description","value":{"en-GB":"An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.","en-US":"An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.","de-DE":"Ein Art-Deco-Lederstuhl mit Ebenholzbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne, wobei die Lederpolsterung ein weiches und luxuriöses Gefühl vermittelt. Die Beine aus Ebenholz sind lang und konisch zulaufend, mit einer glatten Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist auch markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt wäre dieser Stuhl ein markantes Möbelstück, das jedem Raum sowohl Stil als auch Komfort verleiht."}},{"name":"color","value":{"en-GB":"#FFF8ED","de-DE":"#FFF8ED","en-US":"#FFF8ED"}},{"name":"colorlabel","value":{"en-GB":"White Leather","de-DE":"Weißes Leder","en-US":"White Leather"}},{"name":"finishlabel","value":{"en-GB":"Chestnut","de-DE":"Kastanie","en-US":"Chestnut"}},{"name":"finish","value":{"en-GB":"#1B1101","de-DE":"#1B1101","en-US":"#1B1101"}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
