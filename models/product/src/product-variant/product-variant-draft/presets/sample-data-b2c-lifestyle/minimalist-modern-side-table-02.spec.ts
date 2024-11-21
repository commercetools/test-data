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
            "name": "color",
            "value": {
              "de-DE": "Golden Rod:#DAA520",
              "en-GB": "Goldene Rute:#DAA520",
              "en-US": "Golden Rod:#DAA520",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Saddle Brown:#8b4513",
              "en-GB": "Sattel braun:#8b4513",
              "en-US": "Saddle Brown:#8b4513",
            },
          },
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999EUR",
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
            "name": "color",
            "value": "{"en-US":"Golden Rod:#DAA520","en-GB":"Goldene Rute:#DAA520","de-DE":"Golden Rod:#DAA520"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Sattel braun:#8b4513","de-DE":"Saddle Brown:#8b4513"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "4999EUR",
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
