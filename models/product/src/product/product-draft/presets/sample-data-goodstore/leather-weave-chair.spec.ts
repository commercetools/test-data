import type { TProductDraft } from '../../../types';
import leatherWeaveChair from './leather-weave-chair';
describe(`with leatherWeaveChair preset`, () => {
  it('should return a sample leatherWeaveChair product preset', () => {
    const leatherWeaveChairPreset = leatherWeaveChair().build<TProductDraft>();
    expect(leatherWeaveChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "leather-weave-chair",
      "name": {
            "de-DE": "Stuhl aus Ledergeflecht",
            "en-GB": "Leather Weave Chair",
            "en-US": "Leather Weave Chair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "stuhl-aus-ledergeflecht",
            "en-GB": "leather-weave-chair",
            "en-US": "leather-weave-chair"
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
          "attributes": [{"name":"product-description","value":{"en-GB":"A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.","en-US":"A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.","de-DE":"Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten."}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}},{"name":"new-arrival","value":true},{"name":"finishlabel","value":{"en-GB":"Oak","de-DE":"Eiche","en-US":"Oak"}},{"name":"colorlabel","value":{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}},{"name":"color","value":{"en-GB":"#BC5724","de-DE":"#BC5724","en-US":"#BC5724"}},{"name":"finish","value":{"en-GB":"#E3AF81","de-DE":"#E3AF81","en-US":"#E3AF81"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});