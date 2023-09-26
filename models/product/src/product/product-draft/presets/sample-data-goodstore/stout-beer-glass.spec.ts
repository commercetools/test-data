import type { TProductDraft } from '../../../types';
import stoutBeerGlass from './stout-beer-glass';
describe(`with stoutBeerGlass preset`, () => {
  it('should return a sample stoutBeerGlass product preset', () => {
    const stoutBeerGlassPreset = stoutBeerGlass().build<TProductDraft>();
    expect(stoutBeerGlassPreset).toMatchInlineSnapshot(`
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
      "key": "stout-beer-glass",
      "name": {
            "de-DE": "Starkes Bierglas",
            "en-GB": "Stout Beer Glass",
            "en-US": "Stout Beer Glass"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "starkes-bierglas",
            "en-GB": "stout-beer-glass",
            "en-US": "stout-beer-glass"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}},{"name":"product-description","value":{"en-GB":"A stout beer glass, also known as a \"pint glass,\" is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.","en-US":"A stout beer glass, also known as a \"pint glass,\" is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.","de-DE":"Ein Stout-Bierglas, auch als \"Pintglas\" bekannt, ist eine Art Trinkglas, das speziell zum Servieren und Genießen von Stout-Bieren entwickelt wurde. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases soll das Trinkerlebnis verbessern, indem es die volle Geschmacks- und Aromavielfalt des Bieres zur Geltung bringt. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe und Klarheit des Bieres voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Insgesamt ist ein Stout-Bierglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches, aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitstrinker gleichermaßen."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
