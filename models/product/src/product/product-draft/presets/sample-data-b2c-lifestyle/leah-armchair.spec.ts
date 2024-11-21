import type { TProductDraft } from '../../../types';
import leahArmchair from './leah-armchair';

describe(`with leahArmchair preset`, () => {
  it(`should return a leahArmchair preset`, () => {
    const leahArmchairPreset = leahArmchair().build<TProductDraft>();
    expect(leahArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein getufteter Sessel mit Messingbeinen ist ein elegantes und luxuriöses Möbelstück. Der Stuhl verfügt typischerweise über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem und plüschigem Material bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Messingbeine einen Hauch von Glamour und Raffinesse verleihen. Die Beine verleihen dem Stuhl ein elegantes und modernes Aussehen. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich.",
          "en": undefined,
          "en-GB": "A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          "en-US": "A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          "fr": undefined,
        },
        "key": "leah-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung",
                "en-GB": "- Dry clean only",
                "en-US": "- Dry clean only",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Grau:#808080",
                "en-GB": "Grey:#808080",
                "en-US": "Gray:#808080",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Bräunen:#D2B48C",
                "en-GB": "Tan:#D2B48C",
                "en-US": "Tan:#D2B48C",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3200,
                "w": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leah_Armchair-1.1.jpeg",
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
              "key": "39900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "LAMR-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Leah Sessel",
          "en": undefined,
          "en-GB": "Leah Armchair",
          "en-US": "Leah Armchair",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "leah-sessel",
          "en": undefined,
          "en-GB": "leah-armchair",
          "en-US": "leah-armchair",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a leahArmchair preset when built for graphql`, () => {
    const leahArmchairPresetGraphql =
      leahArmchair().buildGraphql<TProductDraft>();
    expect(leahArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
            "locale": "en-US",
            "value": "A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
            "locale": "de-DE",
            "value": "Ein getufteter Sessel mit Messingbeinen ist ein elegantes und luxuriöses Möbelstück. Der Stuhl verfügt typischerweise über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem und plüschigem Material bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Messingbeine einen Hauch von Glamour und Raffinesse verleihen. Die Beine verleihen dem Stuhl ein elegantes und modernes Aussehen. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich.",
          },
        ],
        "key": "leah-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Grey:#808080","de-DE":"Grau:#808080","en-US":"Gray:#808080"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leah_Armchair-1.1.jpeg",
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
              "key": "39900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 39900,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 39900,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 39900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "LAMR-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Leah Armchair",
          },
          {
            "locale": "en-GB",
            "value": "Leah Armchair",
          },
          {
            "locale": "de-DE",
            "value": "Leah Sessel",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "leah-armchair",
          },
          {
            "locale": "en-GB",
            "value": "leah-armchair",
          },
          {
            "locale": "de-DE",
            "value": "leah-sessel",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
