import type { TProductVariantDraft } from '../../../types';
import chiantiWineGlass01 from './chianti-wine-glass-01';

describe(`with chiantiWineGlass01 preset`, () => {
  it(`should return a chiantiWineGlass01 preset`, () => {
    const chiantiWineGlass01Preset =
      chiantiWineGlass01().build<TProductVariantDraft>();
    expect(chiantiWineGlass01Preset).toMatchInlineSnapshot(`
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
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Glas",
                "en-GB": "Glass",
                "en-US": "Glass",
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
            "name": "finish-label",
            "value": {
              "de-DE": "Glas",
              "en-GB": "Glass",
              "en-US": "Glass",
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
          {
            "name": "finish-code",
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
              "h": 3138,
              "w": 2457,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Chianti_Wine_Glass-1.1.jpeg",
          },
        ],
        "key": "chiantiWineGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CWG-01",
      }
    `);
  });

  it(`should return a chiantiWineGlass01 preset when built for graphql`, () => {
    const chiantiWineGlass01PresetGraphql =
      chiantiWineGlass01().buildGraphql<TProductVariantDraft>();
    expect(chiantiWineGlass01PresetGraphql).toMatchInlineSnapshot(`
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
            "name": "search-finish",
            "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3138,
              "width": 2457,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Chianti_Wine_Glass-1.1.jpeg",
          },
        ],
        "key": "chiantiWineGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
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
            "key": "2599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
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
            "key": "2599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CWG-01",
      }
    `);
  });
});
