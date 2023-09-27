import type { TProductDraft } from '../../../types';
import cocktailStrainer from './cocktail-strainer';
describe(`with cocktailStrainer preset`, () => {
  it('should return a sample cocktailStrainer product preset', () => {
    const cocktailStrainerPreset = cocktailStrainer().build<TProductDraft>();
    expect(cocktailStrainerPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
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
      "key": "cocktail-strainer",
      "name": {
            "de-DE": "Cocktailsieb",
            "en-GB": "Cocktail Strainer",
            "en-US": "Cocktail Strainer"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "cocktailsieb",
            "en-GB": "cocktail-strainer",
            "en-US": "cocktail-strainer"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel\n- Dishwasher safe","de-DE":"- Edelstahl\n- Spülmaschinenfest","en-US":"- Stainless steel\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.","en-US":"A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.","de-DE":"Ein Sieb für Cocktailshaker ist ein Barwerkzeug, das verwendet wird, um Eis und andere feste Zutaten aus Mixgetränken abzuseihen, während der flüssige Teil des Cocktails in ein Servierglas gegossen wird. Er besteht aus Metall und hat eine flache, perforierte Scheibe, die über die Öffnung des Shakers passt. Das Sieb wird an Ort und Stelle gehalten, indem man einen Finger über den kleinen, griffartigen Vorsprung auf einer Seite der Scheibe legt, während man die Flüssigkeit durch die größere Öffnung auf der anderen Seite ausgießt. Die perforierte Scheibe hilft dabei, kleine Eis- oder Fruchtstücke herauszufiltern, die in der Mischung zurückbleiben könnten, was zu einem glatten und raffinierten Cocktail führt. Das Sieb hat auch eine Feder um den Rand der Scheibe, die hilft, es sicher über dem Shaker zu halten und so ein Verschütten oder Tropfen zu verhindern."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
