import type { TProductVariantDraft } from '../../../types';
import ryeWhiskeyGlassVariant01 from './rye-whiskey-glass-variant-01';
describe(`with ryeWhiskeyGlassVariant01 preset`, () => {
  it('should return a sample ryeWhiskeyGlassVariant01 product preset', () => {
    const ryeWhiskeyGlassVariant01Preset =
      ryeWhiskeyGlassVariant01().build<TProductVariantDraft>();
    expect(ryeWhiskeyGlassVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Gläser",
              "en-GB": "- Set includes 6 glasses",
              "en-US": "- Set includes 6 glasses",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Das Rye Whiskyglas wurde speziell für den Genuss von Whisky oder anderen Spirituosen entwickelt. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Whiskyglases soll das Trinkerlebnis verbessern, indem das Aroma und der Geschmack des Whiskys voll zur Geltung kommen. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe, Klarheit und Textur des Whiskys voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Getränk nicht verschüttet oder umkippt.  Insgesamt ist das Rye Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein einfaches, aber elegantes Design macht ihn zu einer beliebten Wahl für Whiskykenner und Gelegenheitstrinker gleichermaßen.",
              "en-GB": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
              "en-US": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2990,
              "w": 2848,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_88971003-g055TppL.jpeg",
          },
          {
            "dimensions": {
              "h": 2268,
              "w": 2632,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_99151746-BtymsMi_.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RWG-09",
      }
    `);
  });
});
