import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import travelCoffeeMug01 from './travel-coffee-mug-01';

describe(`with travelCoffeeMug01 preset`, () => {
  it(`should return a travelCoffeeMug01 preset`, () => {
    const travelCoffeeMug01Preset =
      travelCoffeeMug01().build<TProductVariantDraft>();
    expect(travelCoffeeMug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Isoliert
      - Sowohl für kalte als auch heiße Getränke geeignet",
              "en-GB": "- Insulated 
      - Suitable for both cold and hot drinks",
              "en-US": "- Insulated 
      - Suitable for both cold and hot drinks",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Silber",
              "en-GB": "Silver",
              "en-US": "Silver",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#FFFFFF",
              "en-GB": "#FFFFFF",
              "en-US": "#FFFFFF",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#C0C0C0",
              "en-GB": "#C0C0C0",
              "en-US": "#C0C0C0",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg",
          },
        ],
        "key": "travelCoffeeMug01",
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
        "sku": "TCM-03",
      }
    `);
  });

  it(`should return a travelCoffeeMug01 preset when built for graphql`, () => {
    const travelCoffeeMug01PresetGraphql =
      travelCoffeeMug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(travelCoffeeMug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Insulated \\n- Suitable for both cold and hot drinks","en-US":"- Insulated \\n- Suitable for both cold and hot drinks","de-DE":"- Isoliert\\n- Sowohl für kalte als auch heiße Getränke geeignet"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Silver","en-GB":"Silver","de-DE":"Silber"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Silver","de-DE":"Silber","en-US":"Silver"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#FFFFFF","en-GB":"#FFFFFF","de-DE":"#FFFFFF"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#C0C0C0","en-GB":"#C0C0C0","de-DE":"#C0C0C0"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg",
          },
        ],
        "key": "travelCoffeeMug01",
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
        "sku": "TCM-03",
      }
    `);
  });
});
