import type { TProductDraft } from '../../../types';
import cocktailStirringSpoon from './cocktail-stirring-spoon';
describe(`with cocktailStirringSpoon preset`, () => {
  it('should return a sample cocktailStirringSpoon product preset', () => {
    const cocktailStirringSpoonPreset =
      cocktailStirringSpoon().build<TProductDraft>();
    expect(cocktailStirringSpoonPreset).toMatchInlineSnapshot(`
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
      "key": "cocktail-stirring-spoon",
      "name": {
            "de-DE": "Cocktail-Rührlöffel",
            "en-GB": "Cocktail Stirring Spoon",
            "en-US": "Cocktail Stirring Spoon"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "cocktail-rhrlffel",
            "en-GB": "cocktail-stirring-spoon",
            "en-US": "cocktail-stirring-spoon"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel\n- Dishwasher safe","de-DE":"- Edelstahl\n- Spülmaschinenfest","en-US":"- Stainless steel\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.","en-US":"A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.","de-DE":"Ein Cocktail-Rührlöffel ist ein langes und schlankes Utensil aus Edelstahl, das zum Rühren und Mixen von Cocktails verwendet wird. Es ist normalerweise etwa 8 Zoll lang mit einem kleinen, flachen, scheibenförmigen Ende zum Vermischen von Zutaten und einem gedrehten oder spiralförmigen Griff zum einfachen Greifen. Der gedrehte Griff dient nicht nur der Dekoration, sondern verhilft auch zu einem besseren Halt beim Mixen von Cocktails."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
