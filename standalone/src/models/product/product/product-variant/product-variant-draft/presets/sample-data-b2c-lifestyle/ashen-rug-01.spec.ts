import type { TProductVariantDraft } from '../../../types';
import ashenRug01 from './ashen-rug-01';

describe(`with ashenRug01 preset`, () => {
  it(`should return a ashenRug01 preset`, () => {
    const ashenRug01Preset = ashenRug01().build<TProductVariantDraft>();
    expect(ashenRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 5 Fuß x 7 Fuß
      - Nur chemische Reinigung",
              "en-GB": "- 5ft x 7ft
      - Dry-clean only",
              "en-US": "- 5ft x 7ft
      - Dry-clean only",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Grau",
                "en-GB": "Grey",
                "en-US": "Gray",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Gainsboro",
              "en-GB": "Gainsboro",
              "en-US": "Gainsboro",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#dcdcdc",
              "en-GB": "#dcdcdc",
              "en-US": "#dcdcdc",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
          },
        ],
        "key": "ashenRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 25000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ARG-56",
      }
    `);
  });

  it(`should return a ashenRug01 preset when built for graphql`, () => {
    const ashenRug01PresetGraphql =
      ashenRug01().buildGraphql<TProductVariantDraft>();
    expect(ashenRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 5ft x 7ft\\n- Dry-clean only","de-DE":"- 5 Fuß x 7 Fuß\\n- Nur chemische Reinigung","en-US":"- 5ft x 7ft\\n- Dry-clean only"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Gainsboro","de-DE":"Gainsboro","en-US":"Gainsboro"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#dcdcdc","en-GB":"#dcdcdc","de-DE":"#dcdcdc"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
          },
        ],
        "key": "ashenRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19999,
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
            "key": "19999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19999,
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
            "key": "19999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 25000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ARG-56",
      }
    `);
  });
});
