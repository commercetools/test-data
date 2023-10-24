import type { TProductVariantDraft } from '../../../types';
import silkyPillowCover01 from './silky-pillow-cover-01';

describe(`with silkyPillowCover01 preset`, () => {
  it(`should return a silkyPillowCover01 preset`, () => {
    const silkyPillowCover01Preset =
      silkyPillowCover01().build<TProductVariantDraft>();
    expect(silkyPillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Pillow not included",
              "en-US": "- Pillow not included",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#C0C0C0",
              "label": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#8B9299",
              "en-GB": "#8B9299",
              "en-US": "#8B9299",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Stahl",
              "en-GB": "Steel",
              "en-US": "Steel",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4011,
              "w": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Silky_Pillow_Cover-1.1.jpeg",
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
              "centAmount": 1999,
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
              "centAmount": 1999,
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
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SPC-06",
      }
    `);
  });

  it(`should return a silkyPillowCover01 preset when built for graphql`, () => {
    const silkyPillowCover01PresetGraphql =
      silkyPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(silkyPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Pillow not included","en-US":"- Pillow not included","de-DE":"- Kissen nicht im Lieferumfang enthalten"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#8B9299","de-DE":"#8B9299","en-US":"#8B9299"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Steel","de-DE":"Stahl","en-US":"Steel"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4011,
              "width": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Silky_Pillow_Cover-1.1.jpeg",
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
                "centAmount": 1999,
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
                "centAmount": 1999,
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
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SPC-06",
      }
    `);
  });
});
