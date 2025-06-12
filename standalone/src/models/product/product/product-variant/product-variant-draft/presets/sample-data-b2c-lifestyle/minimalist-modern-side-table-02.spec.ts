import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistModernSideTable02 from './minimalist-modern-side-table-02';

describe(`with minimalistModernSideTable02 preset`, () => {
  it(`should return a minimalistModernSideTable02 preset`, () => {
    const minimalistModernSideTable02Preset =
      minimalistModernSideTable02().build<TProductVariantDraft>();
    expect(minimalistModernSideTable02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
              "en-GB": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
              "en-US": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
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
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Golden Rod",
              "en-GB": "Goldene Rute",
              "en-US": "Golden Rod",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Saddle Brown",
              "en-GB": "Sattel braun",
              "en-US": "Saddle Brown",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#DAA520",
              "en-GB": "#DAA520",
              "en-US": "#DAA520",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#8b4513",
              "en-GB": "#8b4513",
              "en-US": "#8b4513",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6026,
              "w": 5883,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg",
          },
        ],
        "key": "minimalistModernSideTable02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MMST-02",
      }
    `);
  });

  it(`should return a minimalistModernSideTable02 preset when built for graphql`, () => {
    const minimalistModernSideTable02PresetGraphql =
      minimalistModernSideTable02().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistModernSideTable02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Goldene Rute","de-DE":"Golden Rod","en-US":"Golden Rod"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Sattel braun","de-DE":"Saddle Brown","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#DAA520","en-GB":"#DAA520","de-DE":"#DAA520"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#8b4513","en-GB":"#8b4513","de-DE":"#8b4513"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6026,
              "width": 5883,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg",
          },
        ],
        "key": "minimalistModernSideTable02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4999,
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
            "key": "4999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4999,
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
            "key": "4999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MMST-02",
      }
    `);
  });
});
