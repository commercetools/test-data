import type { TProductDraft } from '../../../types';
import cocktailShakerSet from './cocktail-shaker-set';
describe(`with cocktailShakerSet preset`, () => {
  it('should return a sample cocktailShakerSet product preset', () => {
    const cocktailShakerSetPreset = cocktailShakerSet().build<TProductDraft>();
    expect(cocktailShakerSetPreset).toMatchInlineSnapshot(`
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
      "key": "cocktail-shaker-set",
      "name": {
            "de-DE": "Cocktail Shaker Set",
            "en-GB": "Cocktail Shaker Set",
            "en-US": "Cocktail Shaker Set"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "cocktail-shaker-set",
            "en-GB": "cocktail-shaker-set",
            "en-US": "cocktail-shaker-set"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel\n- Hand wash only","de-DE":"- Edelstahl\n- Handwäsche nur","en-US":"- Stainless steel\n- Hand wash only"}},{"name":"product-description","value":{"en-GB":"This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.","en-US":"This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.","de-DE":"Dieses Set für die Cocktailzubereitung umfasst einen Shaker, ein Sieb, einen Jigger und eine Zange, die alle aus vergoldetem Edelstahl bestehen. Der Shaker ist ein zweiteiliger Behälter mit einem Deckel, der fest sitzt, um ein Verschütten zu verhindern. Das Sieb passt über die Oberseite des Shakers, um feste Zutaten oder Eis aus dem Cocktail zu entfernen, wenn er in das Glas gegossen wird. Der Jigger ist ein kleiner Messbecher, der dabei hilft, die Zutaten präzise abzumessen. Das Gold-Finish verleiht dem Set ein luxuriöses, elegantes Aussehen, das sich perfekt für die Unterhaltung oder die Zubereitung besonderer Cocktails zu Hause eignet."}},{"name":"colorlabel","value":{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}},{"name":"color-filter","value":{"key":"#FFD700","label":{"de-DE":"Gold","en-GB":"Gold","en-US":"Gold"}}},{"name":"color","value":{"en-GB":"#EED149","de-DE":"#EED149","en-US":"#EED149"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
