import type { TProductDraft } from '../../../types';
import brunoChair from './bruno-chair';
describe(`with brunoChair preset`, () => {
  it('should return a sample brunoChair product preset', () => {
    const brunoChairPreset = brunoChair().build<TProductDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
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
      "key": "bruno-chair",
      "name": {
            "de-DE": "Bruno Stuhl",
            "en-GB": "Bruno Chair",
            "en-US": "Bruno Chair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "bruno-stuhl",
            "en-GB": "bruno-chair",
            "en-US": "bruno-chair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}},{"name":"product-description","value":{"en-GB":"A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.","en-US":"A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.","de-DE":"Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro."}},{"name":"color","value":{"en-GB":"#B29880","de-DE":"#B29880","en-US":"#B29880"}},{"name":"colorlabel","value":{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}},{"name":"finishlabel","value":{"en-GB":"Birch","de-DE":"Birke","en-US":"Birch"}},{"name":"finish","value":{"en-GB":"#FFC28D","de-DE":"#FFC28D","en-US":"#FFC28D"}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
