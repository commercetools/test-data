import type { TProductDraft } from '../../../types';
import sandTeaCup from './sand-tea-cup';
describe(`with sandTeaCup preset`, () => {
  it('should return a sample sandTeaCup product preset', () => {
    const sandTeaCupPreset = sandTeaCup().build<TProductDraft>();
    expect(sandTeaCupPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "sand-tea-cup",
      "name": {
            "de-DE": "Sand-Teetasse",
            "en-GB": "Sand Tea Cup",
            "en-US": "Sand Tea Cup"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "sand-teetasse",
            "en-GB": "sand-tea-cup",
            "en-US": "sand-tea-cup"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 mug","de-DE":"- Enthält 1 Tasse","en-US":"- Includes 1 mug"}},{"name":"product-description","value":{"en-GB":"The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.","en-US":"The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.","de-DE":"Der Sand Tea Cup ist eine Art Trinkgefäß, das zum Aufbewahren und Servieren von Tee und/oder Kaffee entwickelt wurde. Es hat eine zylindrische oder leicht konische Form mit einem Fassungsvermögen von etwa 8 bis 16 Unzen und eine hellbräunliche Farbe.  Der Becher ist aus Keramik. Der Körper des Bechers hat glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee oder Tee erleichtert.  Der Griff des Bechers ist so konzipiert, dass er leicht zu greifen ist, mit einer bequemen Form und einer Größe, die für die meisten Hände geeignet ist. Der Boden des Bechers ist normalerweise flach, mit einer stabilen Basis, die hilft, ein Umkippen und Verschütten zu verhindern.  Die Sand Tea Cup ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieser Becher ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss eines Heißgetränks zu Hause oder auf der Arbeit eignet. Seine neutrale Farbe und sein schlichtes Design machen ihn zu einer beliebten Wahl für Kaffeeliebhaber, die einen klassischen und dezenten Look bevorzugen."}},{"name":"colorlabel","value":{"en-GB":"Sand","de-DE":"Sand","en-US":"Sand"}},{"name":"color","value":{"en-GB":"#FFDC94","de-DE":"#FFDC94","en-US":"#FFDC94"}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});