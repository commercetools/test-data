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
              "de-DE": "#FFF",
              "en-GB": "#FFF",
              "en-US": "#FFF",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Travel%20Coffee%20Mug-EGwE68-i.jpeg",
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
            "value": "{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Travel%20Coffee%20Mug-EGwE68-i.jpeg",
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
        "sku": "TCM-03",
      }
    `);
  });
});
