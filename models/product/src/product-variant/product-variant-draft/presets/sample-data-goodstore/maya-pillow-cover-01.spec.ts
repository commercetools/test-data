import type { TProductVariantDraft } from '../../../types';
import mayaPillowCover01 from './maya-pillow-cover-01';

describe(`with mayaPillowCover01 preset`, () => {
  it(`should return a mayaPillowCover01 preset`, () => {
    const mayaPillowCover01Preset =
      mayaPillowCover01().build<TProductVariantDraft>();
    expect(mayaPillowCover01Preset).toMatchInlineSnapshot(`
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
              "de-DE": "#756960",
              "en-GB": "#756960",
              "en-US": "#756960",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Mauve",
              "en-GB": "Mauve",
              "en-US": "Mauve",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#A020F0",
              "label": {
                "de-DE": "Lila",
                "en-GB": "Purple",
                "en-US": "Purple",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Maya_Pillow_Cover-1.1.jpeg",
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
        "sku": "MPC-02",
      }
    `);
  });

  it(`should return a mayaPillowCover01 preset when built for graphql`, () => {
    const mayaPillowCover01PresetGraphql =
      mayaPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(mayaPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Does not include pillow"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#756960","de-DE":"#756960","en-US":"#756960"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Mauve","de-DE":"Mauve","en-US":"Mauve"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#A020F0","label":{"de-DE":"Lila","en-GB":"Purple","en-US":"Purple"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Maya_Pillow_Cover-1.1.jpeg",
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
        "sku": "MPC-02",
      }
    `);
  });
});
