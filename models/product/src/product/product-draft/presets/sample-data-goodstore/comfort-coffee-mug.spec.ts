import type { TProductDraft } from '../../../types';
import comfortCoffeeMug from './comfort-coffee-mug';
describe(`with comfortCoffeeMug preset`, () => {
  it('should return a sample comfortCoffeeMug product preset', () => {
    const comfortCoffeeMugPreset = comfortCoffeeMug().build<TProductDraft>();
    expect(comfortCoffeeMugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "comfort-coffee-mug",
      "name": {
            "de-DE": "Komfort-Kaffeetasse",
            "en-GB": "Comfort Coffee Mug",
            "en-US": "Comfort Coffee Mug"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "komfort-kaffeetasse",
            "en-GB": "comfort-coffee-mug",
            "en-US": "comfort-coffee-mug"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 mug\n- Dishwasher and microwave safe","de-DE":"- Enthält 1 Tasse\n- Spülmaschinen- und mikrowellengeeignet","en-US":"- Includes 1 mug\n- Dishwasher and microwave safe"}},{"name":"product-description","value":{"en-GB":"The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.","en-US":"The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.","de-DE":"Der Comfort Coffee Mug ist aus Keramik gefertigt. Das Design des Bechers soll das Halten und Trinken erleichtern, mit einem Griff auf einer Seite für bequemen Halt.  Der Becher ist schlicht, aber sein grundlegendes Design ist im Allgemeinen einfach und funktional. Der Körper des Bechers hat oft glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee erleichtert.  Der Comfort Coffee Mug ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist der Comfort Coffee Mug ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Kaffeegenuss zu Hause oder am Arbeitsplatz eignet. Sein einfaches Design und seine Benutzerfreundlichkeit machen ihn zu einer beliebten Wahl für Kaffeeliebhaber aller Art."}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
