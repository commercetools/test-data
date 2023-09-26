import type { TProductDraft } from '../../../types';
import ryeWhiskeyGlass from './rye-whiskey-glass';
describe(`with ryeWhiskeyGlass preset`, () => {
  it('should return a sample ryeWhiskeyGlass product preset', () => {
    const ryeWhiskeyGlassPreset = ryeWhiskeyGlass().build<TProductDraft>();
    expect(ryeWhiskeyGlassPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "rye-whiskey-glass",
      "name": {
            "de-DE": "Roggen-Whisky-Glas",
            "en-GB": "Rye Whiskey Glass",
            "en-US": "Rye Whiskey Glass"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "roggen-whisky-glas",
            "en-GB": "rye-whiskey-glass",
            "en-US": "rye-whiskey-glass"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}},{"name":"product-description","value":{"en-GB":"The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.","en-US":"The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.","de-DE":"Das Rye Whiskyglas wurde speziell für den Genuss von Whisky oder anderen Spirituosen entwickelt. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Whiskyglases soll das Trinkerlebnis verbessern, indem das Aroma und der Geschmack des Whiskys voll zur Geltung kommen. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe, Klarheit und Textur des Whiskys voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Getränk nicht verschüttet oder umkippt.  Insgesamt ist das Rye Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein einfaches, aber elegantes Design macht ihn zu einer beliebten Wahl für Whiskykenner und Gelegenheitstrinker gleichermaßen."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
