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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Violett",
                "en-GB": "Purple",
                "en-US": "Purple",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Pflaume",
              "en-GB": "Plum",
              "en-US": "Plum",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#DDA0DD",
              "en-GB": "#DDA0DD",
              "en-US": "#DDA0DD",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "mayaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899EUR",
            "recurrencePolicy": undefined,
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
            "key": "899GBP",
            "recurrencePolicy": undefined,
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
            "key": "899USD",
            "recurrencePolicy": undefined,
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
            "name": "search-color",
            "value": "[{"en-US":"Purple","en-GB":"Purple","de-DE":"Violett"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Plum","de-DE":"Pflaume","en-US":"Plum"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#DDA0DD","en-GB":"#DDA0DD","de-DE":"#DDA0DD"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "mayaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899EUR",
            "recurrencePolicy": undefined,
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
            "key": "899GBP",
            "recurrencePolicy": undefined,
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
            "key": "899USD",
            "recurrencePolicy": undefined,
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
