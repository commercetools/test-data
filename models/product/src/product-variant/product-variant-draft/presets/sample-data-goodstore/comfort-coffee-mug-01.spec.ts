import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import comfortCoffeeMug01 from './comfort-coffee-mug-01';

describe(`with comfortCoffeeMug01 preset`, () => {
  it(`should return a comfortCoffeeMug01 preset`, () => {
    const comfortCoffeeMug01Preset =
      comfortCoffeeMug01().build<TProductVariantDraft>();
    expect(comfortCoffeeMug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tasse
      - Spülmaschinen- und mikrowellengeeignet",
              "en-GB": "- Includes 1 mug
      - Dishwasher and microwave safe",
              "en-US": "- Includes 1 mug
      - Dishwasher and microwave safe",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
              },
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
              "h": 2256,
              "w": 2340,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Comfort_Coffee_Mug-1.1.jpeg",
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
              "centAmount": 199,
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
              "centAmount": 199,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCM-089",
      }
    `);
  });

  it(`should return a comfortCoffeeMug01 preset when built for graphql`, () => {
    const comfortCoffeeMug01PresetGraphql =
      comfortCoffeeMug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(comfortCoffeeMug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 mug\\n- Dishwasher and microwave safe","de-DE":"- Enthält 1 Tasse\\n- Spülmaschinen- und mikrowellengeeignet","en-US":"- Includes 1 mug\\n- Dishwasher and microwave safe"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
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
              "height": 2256,
              "width": 2340,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Comfort_Coffee_Mug-1.1.jpeg",
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
                "centAmount": 199,
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
                "centAmount": 199,
                "currencyCode": "GBP",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
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
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCM-089",
      }
    `);
  });
});
