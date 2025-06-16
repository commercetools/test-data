import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistModernSideTable01 from './minimalist-modern-side-table-01';

describe(`with minimalistModernSideTable01 preset`, () => {
  it(`should return a minimalistModernSideTable01 preset`, () => {
    const minimalistModernSideTable01Preset =
      minimalistModernSideTable01().build<TProductVariantDraft>();
    expect(minimalistModernSideTable01Preset).toMatchInlineSnapshot(`
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
            "value": "white",
          },
          {
            "name": "search-finish",
            "value": "brown",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "White",
              "en-GB": "Weiß",
              "en-US": "White",
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
            "value": "#FFFFFF",
          },
          {
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6232,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
          },
        ],
        "key": "minimalistModernSideTable01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MMST-01",
      }
    `);
  });

  it(`should return a minimalistModernSideTable01 preset when built for graphql`, () => {
    const minimalistModernSideTable01PresetGraphql =
      minimalistModernSideTable01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistModernSideTable01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
          },
          {
            "name": "search-color",
            "value": ""white"",
          },
          {
            "name": "search-finish",
            "value": ""brown"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Weiß","de-DE":"White","en-US":"White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Sattel braun","de-DE":"Saddle Brown","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFFFF"",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6232,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
          },
        ],
        "key": "minimalistModernSideTable01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12000,
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
            "key": "12000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12000,
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
            "key": "12000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MMST-01",
      }
    `);
  });
});
