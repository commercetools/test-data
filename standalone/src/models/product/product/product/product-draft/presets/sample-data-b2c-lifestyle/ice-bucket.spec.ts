import type { TProductDraft } from '../../../types';
import iceBucket from './ice-bucket';

describe(`with iceBucket preset`, () => {
  it(`should return a iceBucket preset`, () => {
    const iceBucketPreset = iceBucket().build<TProductDraft>();
    expect(iceBucketPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
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
          "de-DE": "Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Er besteht aus Edelstahl und ist so konzipiert, dass er das Eis über einen längeren Zeitraum kalt hält. Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, damit das Eis nicht an den Wänden des Eimers kleben bleibt.",
          "en": undefined,
          "en-GB": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
          "en-US": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
          "fr": undefined,
        },
        "key": "ice-bucket",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Edelstahl
      - Spülmaschinenfest",
                "en-GB": "- Stainless steel
      - Dishwasher safe",
                "en-US": "- Stainless steel
      - Dishwasher safe",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Silber:#C0C0C0",
                "en-GB": "Silver:#C0C0C0",
                "en-US": "Silver:#C0C0C0",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4992,
                "w": 5072,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ice_Bucket-1.1.jpeg",
            },
          ],
          "key": "iceBucket01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BUCK-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Eis Eimer",
          "en": undefined,
          "en-GB": "Ice Bucket",
          "en-US": "Ice Bucket",
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
          "de-DE": "eis-eimer",
          "en": undefined,
          "en-GB": "ice-bucket",
          "en-US": "ice-bucket",
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

  it(`should return a iceBucket preset when built for graphql`, () => {
    const iceBucketPresetGraphql = iceBucket().buildGraphql<TProductDraft>();
    expect(iceBucketPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
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
            "locale": "en-GB",
            "value": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
          },
          {
            "locale": "en-US",
            "value": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Er besteht aus Edelstahl und ist so konzipiert, dass er das Eis über einen längeren Zeitraum kalt hält. Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, damit das Eis nicht an den Wänden des Eimers kleben bleibt.",
          },
        ],
        "key": "ice-bucket",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Stainless steel\\n- Dishwasher safe","de-DE":"- Edelstahl\\n- Spülmaschinenfest","en-US":"- Stainless steel\\n- Dishwasher safe"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0","en-US":"Silver:#C0C0C0"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4992,
                "width": 5072,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ice_Bucket-1.1.jpeg",
            },
          ],
          "key": "iceBucket01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BUCK-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Ice Bucket",
          },
          {
            "locale": "en-GB",
            "value": "Ice Bucket",
          },
          {
            "locale": "de-DE",
            "value": "Eis Eimer",
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
            "value": "ice-bucket",
          },
          {
            "locale": "en-GB",
            "value": "ice-bucket",
          },
          {
            "locale": "de-DE",
            "value": "eis-eimer",
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
