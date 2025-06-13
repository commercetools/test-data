import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import stoutBeerGlass01 from './stout-beer-glass-01';

describe(`with stoutBeerGlass01 preset`, () => {
  it(`should return a stoutBeerGlass01 preset`, () => {
    const stoutBeerGlass01Preset =
      stoutBeerGlass01().build<TProductVariantDraft>();
    expect(stoutBeerGlass01Preset).toMatchInlineSnapshot(`
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
              "transparent",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "glass",
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
            "value": "transparent",
          },
          {
            "name": "finish-code",
            "value": "transparent",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Stout_Beer_Glass-1.1.jpeg",
          },
        ],
        "key": "stoutBeerGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5699,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5699,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SBG-09",
      }
    `);
  });

  it(`should return a stoutBeerGlass01 preset when built for graphql`, () => {
    const stoutBeerGlass01PresetGraphql =
      stoutBeerGlass01().buildGraphql<TProductVariantDraftGraphql>();
    expect(stoutBeerGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","en-US":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser"}",
          },
          {
            "name": "search-color",
            "value": "["transparent"]",
          },
          {
            "name": "search-finish",
            "value": "["glass"]",
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
            "value": ""transparent"",
          },
          {
            "name": "finish-code",
            "value": ""transparent"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Stout_Beer_Glass-1.1.jpeg",
          },
        ],
        "key": "stoutBeerGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5699,
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
            "key": "5699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5699,
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
            "key": "5699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SBG-09",
      }
    `);
  });
});
