import type { TProductDraft } from '../../../types';
import stoneServingTray from './stone-serving-tray';
describe(`with stoneServingTray preset`, () => {
  it('should return a sample stoneServingTray product preset', () => {
    const stoneServingTrayPreset = stoneServingTray().build<TProductDraft>();
    expect(stoneServingTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "cheese-trays",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "bakeware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "stone-serving-tray",
      "name": {
            "de-DE": "Serviertablett aus Stein",
            "en-GB": "Stone Serving Tray",
            "en-US": "Stone Serving Tray"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "serviertablett-aus-stein",
            "en-GB": "stone-serving-tray",
            "en-US": "stone-serving-tray"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Fragile","de-DE":"- Zerbrechlich","en-US":"- Fragile"}},{"name":"product-description","value":{"en-GB":"The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.","en-US":"The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.","de-DE":"Das Stein-Serviertablett besteht aus Naturstein, der zum Servieren und Präsentieren von Speisen dient. Das Tablett besteht aus stabilem Schiefer.  Das Gewicht und die Textur des Steinmaterials verleihen dem Tablett Stabilität und ein Gefühl von Luxus und machen es ideal zum Servieren einer Vielzahl von Speisen, einschließlich Käse, Obst oder Brot. Das Natursteinmaterial des Tabletts macht es auch zu einer ausgezeichneten Wahl für den Einsatz im Freien, z. B. bei einem Picknick oder Grillen.  Ein Serviertablett aus Stein ist leicht zu reinigen und zu pflegen. Es kann mit Wasser und Seife gewaschen werden und sollte nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein Serviertablett aus Stein ein funktionales und ästhetisch ansprechendes Element, das jeder Umgebung einen Hauch von natürlicher Eleganz verleiht. Seine Haltbarkeit, Stabilität und sein einzigartiges Design machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen und Getränken."}},{"name":"finishlabel","value":{"en-GB":"Stone","de-DE":"Stein","en-US":"Stone"}},{"name":"finish","value":{"en-GB":"#6B6B6B","de-DE":"#6B6B6B","en-US":"#6B6B6B"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
