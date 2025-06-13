import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailStrainer01 from './cocktail-strainer-01';

describe(`with cocktailStrainer01 preset`, () => {
  it(`should return a cocktailStrainer01 preset`, () => {
    const cocktailStrainer01Preset =
      cocktailStrainer01().build<TProductVariantDraft>();
    expect(cocktailStrainer01Preset).toMatchInlineSnapshot(`
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
              "h": 3648,
              "w": 5472,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Strainer-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 5472,
              "w": 3648,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Strainer-1.2.jpeg",
          },
        ],
        "key": "cocktailStrainer01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "STRA-095",
      }
    `);
  });

  it(`should return a cocktailStrainer01 preset when built for graphql`, () => {
    const cocktailStrainer01PresetGraphql =
      cocktailStrainer01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailStrainer01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel\\n- Dishwasher safe","de-DE":"- Edelstahl\\n- Spülmaschinenfest","en-US":"- Stainless steel\\n- Dishwasher safe"}",
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
            "value": "{"en-US":"#C0C0C0","en-GB":"#C0C0C0","de-DE":"#C0C0C0"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3648,
              "width": 5472,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Strainer-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 5472,
              "width": 3648,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Strainer-1.2.jpeg",
          },
        ],
        "key": "cocktailStrainer01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
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
            "key": "399GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
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
            "key": "399USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "STRA-095",
      }
    `);
  });
});
