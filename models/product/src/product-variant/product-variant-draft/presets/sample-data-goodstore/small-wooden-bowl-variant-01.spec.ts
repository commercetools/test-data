import type { TProductVariantDraft } from '../../../types';
import smallWoodenBowlVariant01 from './small-wooden-bowl-variant-01';
describe(`with smallWoodenBowlVariant01 preset`, () => {
  it('should return a sample smallWoodenBowlVariant01 product preset', () => {
    const smallWoodenBowlVariant01Preset =
      smallWoodenBowlVariant01().build<TProductVariantDraft>();
    expect(smallWoodenBowlVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Schüssel",
              "en-GB": "- Includes 1 bowl",
              "en-US": "- Includes 1 bowl",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Diese Holzschale ist so konzipiert, dass sie kleine Portionen Essen oder andere kleine Gegenstände aufnehmen kann. Er eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Es kann auch als Dekorationsartikel verwendet werden, da sein natürliches Material und seine einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Es kann als eigenständiges Stück oder als Teil eines größeren Sets verwendet werden und kann mit anderen Holzstücken gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schüssel ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Es sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Insgesamt ist eine kleine runde Holzschale ein vielseitiges und funktionales Geschirr, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern.",
              "en-GB": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
              "en-US": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 3241,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37284922-oEA19cBG.jpeg",
          },
          {
            "dimensions": {
              "h": 3456,
              "w": 5184,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_169211146-2dp5nmXG.jpeg",
          },
          {
            "dimensions": {
              "h": 4096,
              "w": 6144,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_178553758-I0ZPe9BG.jpeg",
          },
          {
            "dimensions": {
              "h": 5133,
              "w": 7696,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_128176135-DWYrV7te.jpeg",
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
              "centAmount": 399,
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
              "centAmount": 399,
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
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SWB-01",
      }
    `);
  });
});
