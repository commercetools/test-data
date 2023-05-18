import type { TProductVariantDraft } from '../../../types';
import halloweenTopVariant01 from './halloween-top-variant-01';

describe(`with halloweenTopVariant01 preset`, () => {
  it(`should return a halloweenTopVariant01 preset`, () => {
    const halloweenTopVariant01Preset =
      halloweenTopVariant01().build<TProductVariantDraft>();
    expect(halloweenTopVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Purple",
              "label": "Purple",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 235,
              "w": 215,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png",
          },
        ],
        "key": "888035",
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
              "centAmount": 2500,
              "currencyCode": "EUR",
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
              "centAmount": 2500,
              "currencyCode": "USD",
            },
          },
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2500,
              "currencyCode": "EUR",
            },
          },
        ],
        "sku": "888035",
      }
    `);
  });

  it(`should return a halloweenTopVariant01 preset when built for graphql`, () => {
    const halloweenTopVariant01PresetGraphql =
      halloweenTopVariant01().buildGraphql<TProductVariantDraft>();
    expect(halloweenTopVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Purple",
              "label": "Purple",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 235,
              "width": 215,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png",
          },
        ],
        "key": "888035",
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
                "centAmount": 2500,
                "currencyCode": "EUR",
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
                "centAmount": 2500,
                "currencyCode": "USD",
              },
            },
          },
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2500,
                "currencyCode": "EUR",
              },
            },
          },
        ],
        "sku": "888035",
      }
    `);
  });
});
