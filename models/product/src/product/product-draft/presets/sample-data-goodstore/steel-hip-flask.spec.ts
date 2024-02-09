import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import steelHipFlask from './steel-hip-flask';

describe(`with steelHipFlask preset`, () => {
  it(`should return a steelHipFlask preset`, () => {
    const steelHipFlaskPreset = steelHipFlask().build<TProductDraft>();
    expect(steelHipFlaskPreset).toMatchInlineSnapshot(`
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Er ist so konzipiert, dass er eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise umfasst er etwa 6 bis 10 Unzen. Der Flachmann hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Trinkbehälters ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche getragen und eignen sich ideal für den diskreten Konsum von Alkohol unterwegs.",
          "en": undefined,
          "en-GB": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
          "en-US": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
          "fr": undefined,
        },
        "key": "steel-hip-flask",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Edelstahl",
                "en-GB": "- Stainless steel",
                "en-US": "- Stainless steel",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 6580,
                "w": 5006,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Steel_Hip_Flask-1.1.jpeg",
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
                "centAmount": 599,
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
                "centAmount": 599,
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
                "centAmount": 599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "FLAS-094",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Flachmann aus Stahl",
          "en": undefined,
          "en-GB": "Steel Hip Flask",
          "en-US": "Steel Hip Flask",
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
          "de-DE": "flachmann-aus-stahl",
          "en": undefined,
          "en-GB": "steel-hip-flask",
          "en-US": "steel-hip-flask",
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

  it(`should return a steelHipFlask preset when built for graphql`, () => {
    const steelHipFlaskPresetGraphql =
      steelHipFlask().buildGraphql<TProductDraftGraphql>();
    expect(steelHipFlaskPresetGraphql).toMatchInlineSnapshot(`
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
          },
          {
            "locale": "de-DE",
            "value": "Der Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Er ist so konzipiert, dass er eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise umfasst er etwa 6 bis 10 Unzen. Der Flachmann hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Trinkbehälters ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche getragen und eignen sich ideal für den diskreten Konsum von Alkohol unterwegs.",
          },
          {
            "locale": "en-GB",
            "value": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
          },
        ],
        "key": "steel-hip-flask",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Stainless steel","en-US":"- Stainless steel","de-DE":"- Edelstahl"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6580,
                "width": 5006,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Steel_Hip_Flask-1.1.jpeg",
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
                "centPrecision": {
                  "centAmount": 599,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "FLAS-094",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Steel Hip Flask",
          },
          {
            "locale": "en-GB",
            "value": "Steel Hip Flask",
          },
          {
            "locale": "de-DE",
            "value": "Flachmann aus Stahl",
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
            "value": "steel-hip-flask",
          },
          {
            "locale": "en-GB",
            "value": "steel-hip-flask",
          },
          {
            "locale": "de-DE",
            "value": "flachmann-aus-stahl",
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
