import type { TProductVariantDraft } from '../../../types';
import traditionalArmchairVariant01 from './traditional-armchair-variant-01';
describe(`with traditionalArmchairVariant01 preset`, () => {
  it('should return a sample traditionalArmchairVariant01 product preset', () => {
    const traditionalArmchairVariant01Preset =
      traditionalArmchairVariant01().build<TProductVariantDraft>();
    expect(traditionalArmchairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Baumwollpolsterung",
              "en-GB": "- Cotton upholstery",
              "en-US": "- Cotton upholstery",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein traditioneller Sessel mit geometrischem Muster hat ein klassisches Design mit einem Hauch von modernem Flair. Der Stuhl hat einen Rahmen und Beine aus Holz. Der Stuhl hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet ein weiches Gefühl für Sitz und Rückenlehne. Das geometrische Muster fügt dem Gesamtbild des Stuhls ein visuelles Interesse und eine Textur hinzu und verleiht dem Dekor des Raums ein subtiles, aber auffälliges Element.  Insgesamt könnte ein traditioneller Sessel mit geometrischem Muster eine großartige Ergänzung für ein Wohn-, Arbeits- oder Schlafzimmer sein und dem Raum sowohl Komfort als auch Stil verleihen.",
              "en-GB": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
              "en-US": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#D0C1B0",
              "en-GB": "#D0C1B0",
              "en-US": "#D0C1B0",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Eierschale",
              "en-GB": "Eggshell",
              "en-US": "Eggshell",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg",
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
              "centAmount": 29900,
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
              "centAmount": 29900,
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
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TARM-034",
      }
    `);
  });
});
