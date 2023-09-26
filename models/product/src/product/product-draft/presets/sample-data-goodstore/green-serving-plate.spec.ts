import type { TProductDraft } from '../../../types';
import greenServingPlate from './green-serving-plate';
describe(`with greenServingPlate preset`, () => {
  it('should return a sample greenServingPlate product preset', () => {
    const greenServingPlatePreset = greenServingPlate().build<TProductDraft>();
    expect(greenServingPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
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
          }
        ],
      "categoryOrderHints": {},
      "key": "green-serving-plate",
      "name": {
            "de-DE": "Grüne Servierplatte",
            "en-GB": "Green Serving Plate",
            "en-US": "Green Serving Plate"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "grne-servierplatte",
            "en-GB": "green-serving-plate",
            "en-US": "green-serving-plate"
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
          "attributes": [{"name":"product-description","value":{"de-DE":"Ein stilvoller grüner Servierteller ist ein Gericht, das entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren.  Der Teller ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Platte Tiefe und Textur verleiht.  Die Form der Platte kann variieren, mit einigen gebogenen Kanten für zusätzliches visuelles Interesse. Der Teller hat ein dekoratives Muster und eine Textur.  Ein stilvoller grüner Servierteller ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist ein stilvoller grüner Servierteller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen es zu einem Blickfang auf jedem Tisch, während seine Haltbarkeit und Praktikabilität dafür sorgen, dass es sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.","en-GB":"A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.","en-US":"A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions."}},{"name":"productspec","value":{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}},{"name":"color-filter","value":{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
