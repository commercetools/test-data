import type { TProductVariantDraft } from '../../../types';
import juteRug01 from './jute-rug-01';

describe(`with juteRug01 preset`, () => {
  it(`should return a juteRug01 preset`, () => {
    const juteRug01Preset = juteRug01().build<TProductVariantDraft>();
    expect(juteRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 10 Fuß x 12 Fuß",
              "en-GB": "- 10ft x 12ft",
              "en-US": "- 10ft x 12ft",
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
            "name": "finishlabel",
            "value": {
              "de-DE": "Jute",
              "en-GB": "Jute",
              "en-US": "Jute",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#EEDA99",
              "en-GB": "#EEDA99",
              "en-US": "#EEDA99",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5223,
              "w": 7600,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.3.jpeg",
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
            "key": undefined,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "JAR-08",
      }
    `);
  });

  it(`should return a juteRug01 preset when built for graphql`, () => {
    const juteRug01PresetGraphql =
      juteRug01().buildGraphql<TProductVariantDraft>();
    expect(juteRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 10ft x 12ft","de-DE":"- 10 Fuß x 12 Fuß","en-US":"- 10ft x 12ft"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Jute","de-DE":"Jute","en-US":"Jute"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#EEDA99","de-DE":"#EEDA99","en-US":"#EEDA99"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5223,
              "width": 7600,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Jute_Rug-1.3.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
        "sku": "JAR-08",
      }
    `);
  });
});
