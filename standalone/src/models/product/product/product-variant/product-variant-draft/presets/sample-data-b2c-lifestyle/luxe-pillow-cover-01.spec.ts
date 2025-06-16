import type { TProductVariantDraft } from '../../../types';
import luxePillowCover01 from './luxe-pillow-cover-01';

describe(`with luxePillowCover01 preset`, () => {
  it(`should return a luxePillowCover01 preset`, () => {
    const luxePillowCover01Preset =
      luxePillowCover01().build<TProductVariantDraft>();
    expect(luxePillowCover01Preset).toMatchInlineSnapshot(`
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
            "value": "#000000",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4082,
              "w": 6123,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Luxe_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "luxePillowCover01",
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
        "sku": "LPC-011",
      }
    `);
  });

  it(`should return a luxePillowCover01 preset when built for graphql`, () => {
    const luxePillowCover01PresetGraphql =
      luxePillowCover01().buildGraphql<TProductVariantDraft>();
    expect(luxePillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
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
            "value": ""#000000"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4082,
              "width": 6123,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Luxe_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "luxePillowCover01",
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
        "sku": "LPC-011",
      }
    `);
  });
});
