import type { TProductDraft } from '../../../types';
import ivoryPlate from './ivory-plate';
describe(`with ivoryPlate preset`, () => {
  it('should return a sample ivoryPlate product preset', () => {
    const ivoryPlatePreset = ivoryPlate().build<TProductDraft>();
    expect(ivoryPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "ivory-plate",
      "name": {
            "de-DE": "Elfenbeinteller",
            "en-GB": "Ivory Plate",
            "en-US": "Ivory Plate"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "elfenbeinteller",
            "en-GB": "ivory-plate",
            "en-US": "ivory-plate"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}},{"name":"product-description","value":{"en-GB":"This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.","en-US":"This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.","de-DE":"Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird."}},{"name":"color-filter","value":{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}},{"name":"color","value":{"en-GB":"#F4F3F0","de-DE":"#F4F3F0","en-US":"#F4F3F0"}},{"name":"colorlabel","value":{"en-GB":"Ivory","de-DE":"Elfenbein","en-US":"Ivory"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
