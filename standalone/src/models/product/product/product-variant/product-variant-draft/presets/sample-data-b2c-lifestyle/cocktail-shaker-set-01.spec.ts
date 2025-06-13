import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailShakerSet01 from './cocktail-shaker-set-01';

describe(`with cocktailShakerSet01 preset`, () => {
  it(`should return a cocktailShakerSet01 preset`, () => {
    const cocktailShakerSet01Preset =
      cocktailShakerSet01().build<TProductVariantDraft>();
    expect(cocktailShakerSet01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl
      - Handwäsche nur",
              "en-GB": "- Stainless steel
      - Hand wash only",
              "en-US": "- Stainless steel
      - Hand wash only",
            },
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            ],
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#FFD700",
              "en-GB": "#FFD700",
              "en-US": "#FFD700",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5334,
              "w": 4929,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker_Set-1.1.jpeg",
          },
        ],
        "key": "cocktailShakerSet01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "COC-0843",
      }
    `);
  });

  it(`should return a cocktailShakerSet01 preset when built for graphql`, () => {
    const cocktailShakerSet01PresetGraphql =
      cocktailShakerSet01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailShakerSet01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel\\n- Hand wash only","de-DE":"- Edelstahl\\n- Handwäsche nur","en-US":"- Stainless steel\\n- Hand wash only"}",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5334,
              "width": 4929,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker_Set-1.1.jpeg",
          },
        ],
        "key": "cocktailShakerSet01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
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
            "key": "1599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
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
            "key": "1599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "COC-0843",
      }
    `);
  });
});
