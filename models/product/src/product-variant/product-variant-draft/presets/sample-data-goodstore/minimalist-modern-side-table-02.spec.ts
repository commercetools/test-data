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
            "name": "finishlabel",
            "value": {
              "de-DE": "Walnut",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#d69169",
              "en-GB": "#d69169",
              "en-US": "#d69169",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Golden Pecan",
              "en-GB": "Golden Pecan",
              "en-US": "Golden Pecan",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#d69169",
              "en-GB": "#d69169",
              "en-US": "#d69169",
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
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Modern_Side_Table-2.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "finishlabel",
            "value": "{"en-US":"Walnut","en-GB":"Walnut","de-DE":"Walnut"}",
          },
          {
            "name": "color",
            "value": "{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Golden Pecan","en-GB":"Golden Pecan","de-DE":"Golden Pecan"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"#d69169","en-GB":"#d69169","de-DE":"#d69169"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6026,
              "width": 5883,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Modern_Side_Table-2.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
