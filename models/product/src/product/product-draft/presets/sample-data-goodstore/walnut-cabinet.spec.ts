import type { TProductDraft } from '../../../types';
import walnutCabinet from './walnut-cabinet';
describe(`with walnutCabinet preset`, () => {
  it('should return a sample walnutCabinet product preset', () => {
    const walnutCabinetPreset = walnutCabinet().build<TProductDraft>();
    expect(walnutCabinetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "walnut-cabinet",
      "name": {
            "de-DE": "Nussbaum Schrank",
            "en-GB": "Walnut Cabinet",
            "en-US": "Walnut Cabinet"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "nussbaum-schrank",
            "en-GB": "walnut-cabinet",
            "en-US": "walnut-cabinet"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten","en-US":"- Assembly included in delivery"}},{"name":"product-description","value":{"en-GB":"This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.","en-US":"This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.","de-DE":"Dieser Nussbaumschrank hat viele Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen können einfache Griffe haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsgegenständen wie Vasen oder Kerzen verwendet werden.  Insgesamt ist ein großes Sideboard mit vielen Schubladen ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht."}},{"name":"finishlabel","value":{"en-GB":"Walnut","de-DE":"Nussbaum","en-US":"Walnut"}},{"name":"color-filter","value":{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}},{"name":"finish","value":{"en-GB":"#7A5905","de-DE":"#7A5905","en-US":"#7A5905"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
