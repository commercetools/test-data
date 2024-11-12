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
            "name": "color",
            "value": {
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
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
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg",
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
            "key": "499EUR",
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
            "name": "color",
            "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"Silver:#C0C0C0","en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0"}",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "499EUR",
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
