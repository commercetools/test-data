import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import crystalDrinkingGlass01 from './crystal-drinking-glass-01';

describe(`with crystalDrinkingGlass01 preset`, () => {
  it(`should return a crystalDrinkingGlass01 preset`, () => {
    const crystalDrinkingGlass01Preset =
      crystalDrinkingGlass01().build<TProductVariantDraft>();
    expect(crystalDrinkingGlass01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Gläser",
              "en-GB": "- Set includes 6 glasses",
              "en-US": "- Set includes 6 glasses",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Transparent",
                "en-GB": "Transparent",
                "en-US": "Transparent",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Transparent",
              "en-GB": "Transparent",
              "en-US": "Transparent",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "transparent",
              "en-GB": "transparent",
              "en-US": "transparent",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Crystal_Drinking_Glass-1.1.jpeg",
          },
        ],
        "key": "crystalDrinkingGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CDG-09",
      }
    `);
  });

  it(`should return a crystalDrinkingGlass01 preset when built for graphql`, () => {
    const crystalDrinkingGlass01PresetGraphql =
      crystalDrinkingGlass01().buildGraphql<TProductVariantDraftGraphql>();
    expect(crystalDrinkingGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Crystal_Drinking_Glass-1.1.jpeg",
          },
        ],
        "key": "crystalDrinkingGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3499,
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
            "key": "3499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3499,
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
            "key": "3499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CDG-09",
      }
    `);
  });
});
