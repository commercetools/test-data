import type { TProductDraft } from '../../../types';
import edgarArmchair from './edgar-armchair';
describe(`with edgarArmchair preset`, () => {
  it('should return a sample edgarArmchair product preset', () => {
    const edgarArmchairPreset = edgarArmchair().build<TProductDraft>();
    expect(edgarArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
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
      "key": "edgar-armchair",
      "name": {
            "de-DE": "Edgar Sessel",
            "en-GB": "Edgar Armchair",
            "en-US": "Edgar Armchair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "edgar-sessel",
            "en-GB": "edgar-armchair",
            "en-US": "edgar-armchair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}},{"name":"product-description","value":{"en-GB":"An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.","en-US":"An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.","de-DE":"Ein Sessel im abstrakten modernen Stil mit Metallbeinen ist ein einzigartiges Möbelstück, das jedem Raum einen Hauch von Raffinesse verleiht. Der Stuhl ist mit klaren Linien und einem schlanken Profil gestaltet und verfügt über einen niedrigen, breiten Sitz und eine hohe Rückenlehne, die sich sanft um die Seiten des Stuhls krümmt. Der Sitz und die Rückenlehne sind mit einem strukturierten, strapazierfähigen Stoff bezogen, der dem klassischen Sesseldesign eine zeitgemäße Note verleiht. Die Metallbeine sind dünn und konisch zulaufend und bilden eine filigrane und dennoch stabile Basis für den Stuhl. Insgesamt ist dieser Sessel eine perfekte Mischung aus Stil und Komfort, was ihn zu einer großartigen Ergänzung für jeden modernen Wohnraum macht."}},{"name":"colorlabel","value":{"en-GB":"Light Sage","de-DE":"Leichter Salbei","en-US":"Light Sage"}},{"name":"color","value":{"en-GB":"#B6C9B6","de-DE":"#B6C9B6","en-US":"#B6C9B6"}},{"name":"finishlabel","value":{"en-GB":"Iron","de-DE":"Eisen","en-US":"Iron"}},{"name":"finish","value":{"en-GB":"#000","de-DE":"#000","en-US":"#000"}},{"name":"color-filter","value":{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
