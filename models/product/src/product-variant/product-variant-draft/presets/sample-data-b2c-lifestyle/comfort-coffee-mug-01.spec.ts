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
            "name": "color",
            "value": {
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Comfort_Coffee_Mug-1.1.jpeg",
          },
        ],
        "key": "comfortCoffeeMug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199EUR",
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
            "key": "199GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "149USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 149,
              "currencyCode": "USD",
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
            "key": "199USD_dist",
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
            "name": "color",
            "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2256,
              "width": 2340,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Comfort_Coffee_Mug-1.1.jpeg",
          },
        ],
        "key": "comfortCoffeeMug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199EUR",
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
            "key": "199GBP",
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
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "149USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 149,
                "currencyCode": "USD",
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
            "key": "199USD_dist",
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
