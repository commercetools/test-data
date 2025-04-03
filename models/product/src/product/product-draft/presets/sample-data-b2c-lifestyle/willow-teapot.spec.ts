import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import willowTeapot from './willow-teapot';

describe(`with willowTeapot preset`, () => {
  it(`should return a willowTeapot preset`, () => {
    const willowTeapotPreset = willowTeapot().build<TProductDraft>();
    expect(willowTeapotPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese Teekanne besteht aus feinem Porzellan, allgemein bekannt als Knochenporzellan. Es ist ein zartes und elegantes Geschirr, das zum Aufbrühen und Servieren von Tee bestimmt ist.  Das für die Teekanne verwendete feine Porzellanmaterial hat ein hervorragendes Wärmespeichervermögen und sorgt dafür, dass der Tee lange warm bleibt. Es ist auch nicht porös, was bedeutet, dass es keine Aromen oder Gerüche aus dem Tee aufnimmt, wodurch die Reinheit des Geschmacks erhalten bleibt.  Zum Reinigen einer Teekanne aus Porzellan wird empfohlen, sie von Hand mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die empfindliche Oberfläche der Teekanne beschädigen können.  Die Teekanne aus Porzellan ein zeitloses und klassisches Geschirr, das jeder Teestunde oder Zusammenkunft einen Hauch von Eleganz und Raffinesse verleiht. Ihr zartes und kompliziertes Design, kombiniert mit ihrer Funktionalität und Wärmespeichereigenschaften, macht sie zum idealen Must-have für Teeliebhaber auf der ganzen Welt.",
          "en": undefined,
          "en-GB": "This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.",
          "en-US": "This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.",
          "fr": undefined,
        },
        "key": "willow-teapot",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Handwäsche nur",
                "en-GB": "- Hand wash only",
                "en-US": "- Hand wash only",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Himmel blau:#87CEEB",
                "en-GB": "Sky Blue:#87CEEB",
                "en-US": "Sky Blue:#87CEEB",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4160,
                "w": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Willow_Teapot-1.1.jpeg",
            },
          ],
          "key": "willowTeapot01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "WTP-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Teekanne >Willow<",
          "en": undefined,
          "en-GB": "Willow Teapot",
          "en-US": "Willow Teapot",
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
          "de-DE": "willow-teekanne",
          "en": undefined,
          "en-GB": "willow-teapot",
          "en-US": "willow-teapot",
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

  it(`should return a willowTeapot preset when built for graphql`, () => {
    const willowTeapotPresetGraphql =
      willowTeapot().buildGraphql<TProductDraftGraphql>();
    expect(willowTeapotPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.",
          },
          {
            "locale": "de-DE",
            "value": "Diese Teekanne besteht aus feinem Porzellan, allgemein bekannt als Knochenporzellan. Es ist ein zartes und elegantes Geschirr, das zum Aufbrühen und Servieren von Tee bestimmt ist.  Das für die Teekanne verwendete feine Porzellanmaterial hat ein hervorragendes Wärmespeichervermögen und sorgt dafür, dass der Tee lange warm bleibt. Es ist auch nicht porös, was bedeutet, dass es keine Aromen oder Gerüche aus dem Tee aufnimmt, wodurch die Reinheit des Geschmacks erhalten bleibt.  Zum Reinigen einer Teekanne aus Porzellan wird empfohlen, sie von Hand mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die empfindliche Oberfläche der Teekanne beschädigen können.  Die Teekanne aus Porzellan ein zeitloses und klassisches Geschirr, das jeder Teestunde oder Zusammenkunft einen Hauch von Eleganz und Raffinesse verleiht. Ihr zartes und kompliziertes Design, kombiniert mit ihrer Funktionalität und Wärmespeichereigenschaften, macht sie zum idealen Must-have für Teeliebhaber auf der ganzen Welt.",
          },
          {
            "locale": "en-GB",
            "value": "This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.",
          },
        ],
        "key": "willow-teapot",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Hand wash only","en-US":"- Hand wash only","de-DE":"- Handwäsche nur"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Sky Blue:#87CEEB","de-DE":"Himmel blau:#87CEEB","en-US":"Sky Blue:#87CEEB"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4160,
                "width": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Willow_Teapot-1.1.jpeg",
            },
          ],
          "key": "willowTeapot01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
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
              "key": "899GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
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
              "key": "899USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "WTP-09",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Willow Teapot",
          },
          {
            "locale": "en-GB",
            "value": "Willow Teapot",
          },
          {
            "locale": "de-DE",
            "value": "Teekanne >Willow<",
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
            "value": "willow-teapot",
          },
          {
            "locale": "en-GB",
            "value": "willow-teapot",
          },
          {
            "locale": "de-DE",
            "value": "willow-teekanne",
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
