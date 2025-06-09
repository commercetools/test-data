import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import patternedPillowCover01 from './patterned-pillow-cover-01';

describe(`with patternedPillowCover01 preset`, () => {
  it(`should return a patternedPillowCover01 preset`, () => {
    const patternedPillowCover01Preset =
      patternedPillowCover01().build<TProductVariantDraft>();
    expect(patternedPillowCover01Preset).toMatchInlineSnapshot(`
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
              "pink",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Lavendel",
              "en-GB": "Lavender Blush",
              "en-US": "Lavender Blush",
            },
          },
          {
            "name": "color-code",
            "value": "#fff0f5",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "patternedPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1499,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1499,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ADPC-09",
      }
    `);
  });

  it(`should return a patternedPillowCover01 preset when built for graphql`, () => {
    const patternedPillowCover01PresetGraphql =
      patternedPillowCover01().buildGraphql<TProductVariantDraftGraphql>();
    expect(patternedPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
          },
          {
            "name": "search-color",
            "value": "["pink"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Lavender Blush","de-DE":"Lavendel","en-US":"Lavender Blush"}",
          },
          {
            "name": "color-code",
            "value": ""#fff0f5"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "patternedPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1499,
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
            "key": "1499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1499,
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
            "key": "1499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ADPC-09",
      }
    `);
  });
});
