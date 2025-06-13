import type { TProductVariantDraft } from '../../../types';
import abigailLoungeChair01 from './abigail-lounge-chair-01';

describe(`with abigailLoungeChair01 preset`, () => {
  it(`should return a abigailLoungeChair01 preset`, () => {
    const abigailLoungeChair01Preset =
      abigailLoungeChair01().build<TProductVariantDraft>();
    expect(abigailLoungeChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird mit passendem Kissen geliefert
      - Samtpolsterung
      - Wird zusammengebaut geliefert",
              "en-GB": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
              "en-US": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
            ],
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
            "name": "color-label",
            "value": {
              "de-DE": "Hell rosa",
              "en-GB": "Light Pink",
              "en-US": "Light Pink",
            },
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
            "name": "color-code",
            "value": {
              "de-DE": "#FFB6C1",
              "en-GB": "#FFB6C1",
              "en-US": "#FFB6C1",
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
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
          },
        ],
        "key": "abigailLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "75000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "75000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "70000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 70000,
              "currencyCode": "USD",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "75000USD_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ALC-01",
      }
    `);
  });

  it(`should return a abigailLoungeChair01 preset when built for graphql`, () => {
    const abigailLoungeChair01PresetGraphql =
      abigailLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(abigailLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","de-DE":"- Wird mit passendem Kissen geliefert\\n- Samtpolsterung\\n- Wird zusammengebaut geliefert"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Pink","en-GB":"Pink","de-DE":"Rosa"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Pink","de-DE":"Hell rosa","en-US":"Light Pink"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#FFB6C1","en-GB":"#FFB6C1","de-DE":"#FFB6C1"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
          },
        ],
        "key": "abigailLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "75000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
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
            "key": "75000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
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
            "key": "70000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 70000,
                "currencyCode": "USD",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "75000USD_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ALC-01",
      }
    `);
  });
});
