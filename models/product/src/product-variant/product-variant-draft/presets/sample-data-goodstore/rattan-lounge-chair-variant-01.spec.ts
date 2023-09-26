import type { TProductVariantDraft } from '../../../types';
import rattanLoungeChairVariant01 from './rattan-lounge-chair-variant-01';
describe(`with rattanLoungeChairVariant01 preset`, () => {
  it('should return a sample rattanLoungeChairVariant01 product preset', () => {
    const rattanLoungeChairVariant01Preset =
      rattanLoungeChairVariant01().build<TProductVariantDraft>();
    expect(rattanLoungeChairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive 2 Kissen für Sitz und Rückenlehne",
              "en-GB": "- Includes 2 cushions for seat and backrest",
              "en-US": "- Includes 2 cushions for seat and backrest",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Der Rattan Lounge Chair wurde entwickelt, um bequeme Sitzgelegenheiten zum Entspannen und Faulenzen zu bieten. Der Stuhl verfügt über ein stabiles Gestell aus Rattan, mit einem gewebten Muster aus Rattanfasern, das Sitzfläche und Rückenlehne bildet.  Der Stuhl ist mit einer zusätzlichen Polsterung für zusätzlichen Komfort aus weichem Baumwollstoff ausgestattet. Die Kissen sind abnehmbar, was eine einfache Reinigung oder einen einfachen Austausch ermöglicht.  Das Design des Rattan-Loungesessels ist von tropischen oder böhmischen Stilen inspiriert und hat einen natürlichen und erdigen Look. Der Stuhl verfügt über komplizierte Webmuster oder geometrische Formen, die eine optisch interessante Textur erzeugen.  Das für die Konstruktion des Stuhls verwendete Rattanmaterial ist für seine Langlebigkeit und Verschleißfestigkeit bekannt. Außerdem ist er leicht, sodass der Stuhl leicht im Raum bewegt werden kann.  Insgesamt ist ein Rattan-Loungesessel eine stilvolle und bequeme Ergänzung für jedes Wohnzimmer oder jeden Außenbereich. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre und machen es zum perfekten Ort, um sich zu entspannen und etwas Ruhe und Frieden zu genießen.",
              "en-GB": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
              "en-US": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#EDEBE8",
              "en-GB": "#EDEBE8",
              "en-US": "#EDEBE8",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Perle",
              "en-GB": "Pearl",
              "en-US": "Pearl",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Rattan",
              "en-GB": "Rattan",
              "en-US": "Rattan",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E0AC58",
              "en-GB": "#E0AC58",
              "en-US": "#E0AC58",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_433585415-Va2aMUo1.jpeg",
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
              "centAmount": 19900,
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
              "centAmount": 19900,
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
              "centAmount": 19900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RLC-08",
      }
    `);
  });
});
