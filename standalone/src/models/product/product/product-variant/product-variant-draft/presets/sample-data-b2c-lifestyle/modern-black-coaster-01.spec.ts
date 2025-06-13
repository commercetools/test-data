import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernBlackCoaster01 from './modern-black-coaster-01';

describe(`with modernBlackCoaster01 preset`, () => {
  it(`should return a modernBlackCoaster01 preset`, () => {
    const modernBlackCoaster01Preset =
      modernBlackCoaster01().build<TProductVariantDraft>();
    expect(modernBlackCoaster01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 4 Untersetzer",
              "en-GB": "- Set includes 4 coasters",
              "en-US": "- Set includes 4 coasters",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#000000",
              "en-GB": "#000000",
              "en-US": "#000000",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2912,
              "w": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2912,
              "w": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.2.jpeg",
          },
        ],
        "key": "modernBlackCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BCOAS-08",
      }
    `);
  });

  it(`should return a modernBlackCoaster01 preset when built for graphql`, () => {
    const modernBlackCoaster01PresetGraphql =
      modernBlackCoaster01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernBlackCoaster01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 4 coasters","de-DE":"- Das Set enthält 4 Untersetzer","en-US":"- Set includes 4 coasters"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2912,
              "width": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2912,
              "width": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.2.jpeg",
          },
        ],
        "key": "modernBlackCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BCOAS-08",
      }
    `);
  });
});
