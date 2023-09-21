import type { TProductDraft } from '../../../types';
import ellaSquarePlate from './ella-square-plate';
describe(`with ellaSquarePlate preset`, () => {
  it('should return a sample ellaSquarePlate product preset', () => {
    const ellaSquarePlatePreset = ellaSquarePlate().build<TProductDraft>();
    expect(ellaSquarePlatePreset).toMatchInlineSnapshot(`
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
          }
        ],
      "categoryOrderHints": {},
      "key": "ella-square-plate",
      "name": {
            "de-DE": "Ella Quadratische Platte",
            "en-GB": "Ella Square Plate",
            "en-US": "Ella Square Plate"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "ella-quadratische-platte",
            "en-GB": "ella-square-plate",
            "en-US": "ella-square-plate"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}},{"name":"product-description","value":{"de-DE":"Dieser quadratische Ella-Keramikteller ist eine flache, vierseitige Schale, die sich ideal zum Servieren oder Präsentieren von Speisen eignet. Eine flache quadratische Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, von Vorspeisen und Hauptgerichten bis hin zu Desserts und Snacks. Es kann sowohl für formelle als auch für ungezwungene Anlässe verwendet werden, und seine Einfachheit und Vielseitigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen.  Insgesamt ist ein quadratischer Keramikteller eine funktionale und stilvolle Wahl zum Servieren von Mahlzeiten und kann jedem Speiseerlebnis einen Hauch von Eleganz verleihen.","en-GB":"This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.","en-US":"This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience."}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
