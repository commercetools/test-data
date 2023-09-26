import type { TProductDraft } from '../../../types';
import marquisTray from './marquis-tray';
describe(`with marquisTray preset`, () => {
  it('should return a sample marquisTray product preset', () => {
    const marquisTrayPreset = marquisTray().build<TProductDraft>();
    expect(marquisTrayPreset).toMatchInlineSnapshot(`
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
          }
        ],
      "categoryOrderHints": {},
      "key": "marquis-tray",
      "name": {
            "de-DE": "Marquis Tablett",
            "en-GB": "Marquis Tray",
            "en-US": "Marquis Tray"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "marquis-tablett",
            "en-GB": "marquis-tray",
            "en-US": "marquis-tray"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 tray","de-DE":"- Enthält 1 Tablett","en-US":"- Includes 1 tray"}},{"name":"product-description","value":{"en-GB":"This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.","en-US":"This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.","de-DE":"Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen."}},{"name":"color-filter","value":{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
