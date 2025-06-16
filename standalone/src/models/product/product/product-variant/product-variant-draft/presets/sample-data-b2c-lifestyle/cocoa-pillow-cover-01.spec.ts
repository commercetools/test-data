import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocoaPillowCover01 from './cocoa-pillow-cover-01';

describe(`with cocoaPillowCover01 preset`, () => {
  it(`should return a cocoaPillowCover01 preset`, () => {
    const cocoaPillowCover01Preset =
      cocoaPillowCover01().build<TProductVariantDraft>();
    expect(cocoaPillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Machine washable
      - Pillow not included",
              "en-US": "- Machine washable
      - Pillow not included",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocoa_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "cocoaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BLPC-09",
      }
    `);
  });

  it(`should return a cocoaPillowCover01 preset when built for graphql`, () => {
    const cocoaPillowCover01PresetGraphql =
      cocoaPillowCover01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocoaPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocoa_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "cocoaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
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
            "key": "1099GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
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
            "key": "1099USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BLPC-09",
      }
    `);
  });
});
