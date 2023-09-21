import type { TProductDraft } from '../../../types';
import rectangleServingTray from './rectangle-serving-tray';
describe(`with rectangleServingTray preset`, () => {
  it('should return a sample rectangleServingTray product preset', () => {
    const rectangleServingTrayPreset =
      rectangleServingTray().build<TProductDraft>();
    expect(rectangleServingTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "rectangle-serving-tray",
      "name": {
            "de-DE": "Rechteckiges Serviertablett",
            "en-GB": "Rectangle Serving Tray",
            "en-US": "Rectangle Serving Tray"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rechteckiges-serviertablett",
            "en-GB": "rectangle-serving-tray",
            "en-US": "rectangle-serving-tray"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Hand wash only\n- Natural wood","en-US":"- Hand wash only\n- Natural wood","de-DE":"- Handwäsche nur\n- Naturholz"}},{"name":"product-description","value":{"en-GB":"This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.","en-US":"This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.","de-DE":"Dieses Serviertablett aus Holz ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Holzmaterial sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.  Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein Serviertablett aus Holz ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit, Vielseitigkeit und Designvielfalt machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
