import type { TProductVariantDraft } from '../../../types';
import sallyArmchairVariant01 from './sally-armchair-variant-01';
describe(`with sallyArmchairVariant01 preset`, () => {
  it('should return a sample sallyArmchairVariant01 product preset', () => {
    const sallyArmchairVariant01Preset =
      sallyArmchairVariant01().build<TProductVariantDraft>();
    expect(sallyArmchairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird mit passendem Dekokissen geliefert",
              "en-GB": "- Comes with matching throw pillow",
              "en-US": "- Comes with matching throw pillow",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein getufteter Sessel mit Holzbeinen ist ein elegantes und bequemes Möbelstück. Der Stuhl verfügt über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem Plüschmaterial bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Holzbeine einen Hauch von Weichheit und Wärme hinzufügen. Die Beine sind dünn und verjüngt, was dem Stuhl ein schlankes und modernes Aussehen verleiht. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich.",
              "en-GB": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
              "en-US": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Baby Pink",
              "en-GB": "Baby Pink",
              "en-US": "Baby Pink",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFE0E0",
              "en-GB": "#FFE0E0",
              "en-US": "#FFE0E0",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Zeder",
              "en-GB": "Cedar",
              "en-US": "Cedar",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#FAE7C6",
              "en-GB": "#FAE7C6",
              "en-US": "#FAE7C6",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFC0CB",
              "label": {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_434126551-_8wicI2h.jpeg",
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
        "sku": "SARMO-034",
      }
    `);
  });
});
