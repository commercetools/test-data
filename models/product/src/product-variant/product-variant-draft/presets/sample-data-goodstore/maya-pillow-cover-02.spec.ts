import type { TProductVariantDraft } from '../../../types';
import mayaPillowCover02 from './maya-pillow-cover-02';

describe(`with mayaPillowCover02 preset`, () => {
  it(`should return a mayaPillowCover02 preset`, () => {
    const mayaPillowCover02Preset =
      mayaPillowCover02().build<TProductVariantDraft>();
    expect(mayaPillowCover02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Machine washable
      - Does not include pillow",
              "en-US": "- Machine washable
      - Does not include pillow",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#c2b78c",
              "en-GB": "#c2b78c",
              "en-US": "#c2b78c",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Maya_Pillow_Cover-2.1.jpeg",
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
              "centAmount": 899,
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
              "centAmount": 899,
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
              "centAmount": 899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MPC-07",
      }
    `);
  });

  it(`should return a mayaPillowCover02 preset when built for graphql`, () => {
    const mayaPillowCover02PresetGraphql =
      mayaPillowCover02().buildGraphql<TProductVariantDraft>();
    expect(mayaPillowCover02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Does not include pillow"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#c2b78c","de-DE":"#c2b78c","en-US":"#c2b78c"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Maya_Pillow_Cover-2.1.jpeg",
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
                "centAmount": 899,
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
                "centAmount": 899,
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
                "centAmount": 899,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MPC-07",
      }
    `);
  });
});
