import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailShaker01 from './cocktail-shaker-01';

describe(`with cocktailShaker01 preset`, () => {
  it(`should return a cocktailShaker01 preset`, () => {
    const cocktailShaker01Preset =
      cocktailShaker01().build<TProductVariantDraft>();
    expect(cocktailShaker01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive eingebautem Sieb
      - Edelstahl
      - Spülmaschinenfest",
              "en-GB": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
              "en-US": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
            },
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
            "name": "finish-label",
            "value": {
              "de-DE": "Silber",
              "en-GB": "Silver",
              "en-US": "Silver",
            },
          },
          {
            "name": "finish-code",
            "value": "#C0C0C0",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5500,
              "w": 3850,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3750,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.2.jpeg",
          },
        ],
        "key": "cocktailShaker01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "COCT-09",
      }
    `);
  });

  it(`should return a cocktailShaker01 preset when built for graphql`, () => {
    const cocktailShaker01PresetGraphql =
      cocktailShaker01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailShaker01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes built in strainer\\n- Stainless steel\\n- Dishwasher safe","de-DE":"- Inklusive eingebautem Sieb\\n- Edelstahl\\n- Spülmaschinenfest","en-US":"- Includes built in strainer\\n- Stainless steel\\n- Dishwasher safe"}",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Silver","en-GB":"Silver","de-DE":"Silber"}]",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Silver","de-DE":"Silber","en-US":"Silver"}",
          },
          {
            "name": "finish-code",
            "value": ""#C0C0C0"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5500,
              "width": 3850,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3750,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.2.jpeg",
          },
        ],
        "key": "cocktailShaker01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
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
            "key": "699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
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
            "key": "699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "COCT-09",
      }
    `);
  });
});
