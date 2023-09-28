import type { TProductVariantDraft } from '../../../types';
import iceBucket01 from './ice-bucket-01';

describe(`with iceBucket01 preset`, () => {
  it(`should return a iceBucket01 preset`, () => {
    const iceBucket01Preset = iceBucket01().build<TProductVariantDraft>();
    expect(iceBucket01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Er besteht aus Edelstahl und ist so konzipiert, dass er das Eis über einen längeren Zeitraum kalt hält. Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, damit das Eis nicht an den Wänden des Eimers kleben bleibt.",
              "en-GB": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
              "en-US": "A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_429585249-GI0q3D7S.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });

  it(`should return a iceBucket01 preset when built for graphql`, () => {
    const iceBucket01PresetGraphql =
      iceBucket01().buildGraphql<TProductVariantDraft>();
    expect(iceBucket01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel\\n- Dishwasher safe","de-DE":"- Edelstahl\\n- Spülmaschinenfest","en-US":"- Stainless steel\\n- Dishwasher safe"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.","en-US":"A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.","de-DE":"Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Er besteht aus Edelstahl und ist so konzipiert, dass er das Eis über einen längeren Zeitraum kalt hält. Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, damit das Eis nicht an den Wänden des Eimers kleben bleibt."}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4992,
              "width": 5072,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_429585249-GI0q3D7S.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });
});
