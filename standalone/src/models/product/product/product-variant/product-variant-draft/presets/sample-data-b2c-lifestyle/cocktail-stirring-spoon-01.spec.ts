import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailStirringSpoon01 from './cocktail-stirring-spoon-01';

describe(`with cocktailStirringSpoon01 preset`, () => {
  it(`should return a cocktailStirringSpoon01 preset`, () => {
    const cocktailStirringSpoon01Preset =
      cocktailStirringSpoon01().build<TProductVariantDraft>();
    expect(cocktailStirringSpoon01Preset).toMatchInlineSnapshot(`
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
              "h": 4555,
              "w": 5757,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Stirring_Spoon-1.1.jpeg",
          },
        ],
        "key": "cocktailStirringSpoon01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199EUR",
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
            "key": "199USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SPOO-094",
      }
    `);
  });

  it(`should return a cocktailStirringSpoon01 preset when built for graphql`, () => {
    const cocktailStirringSpoon01PresetGraphql =
      cocktailStirringSpoon01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailStirringSpoon01PresetGraphql).toMatchInlineSnapshot(`
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
              "height": 4555,
              "width": 5757,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Stirring_Spoon-1.1.jpeg",
          },
        ],
        "key": "cocktailStirringSpoon01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199EUR",
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
            "key": "199USD",
            "recurrencePolicy": undefined,
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
        "sku": "SPOO-094",
      }
    `);
  });
});
