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
            "name": "color",
            "value": {
              "de-DE": "white",
              "en-GB": "#FFF",
              "en-US": "white",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "White",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "white",
              "en-GB": "#FFF",
              "en-US": "white",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Marble",
              "en-GB": "Marble",
              "en-US": "Marble",
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
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6232,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg",
          },
          {
            "dimensions": {
              "h": 3758,
              "w": 3758,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "color",
            "value": "{"en-US":"white","en-GB":"#FFF","de-DE":"white"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"White","en-GB":"White","de-DE":"White"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"white","en-GB":"#FFF","de-DE":"white"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Marble","en-GB":"Marble","de-DE":"Marble"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6232,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570068-ftaFzBEg.jpeg",
          },
          {
            "dimensions": {
              "height": 3758,
              "width": 3758,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_314247429-Qt_DKygA.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
