import type { TProductVariantDraft } from '../../../types';
import promDressVariant02 from './prom-dress-variant-02';

describe(`with promDressVariant02 preset`, () => {
  it(`should return a promDressVariant02 preset`, () => {
    const promDressVariant02Preset =
      promDressVariant02().build<TProductVariantDraft>();
    expect(promDressVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "key": "Pink",
              "label": "Pink",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 1920,
              "w": 1779,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png",
          },
        ],
        "key": "214452",
        "prices": [
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12500,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 15000,
              "currencyCode": "AUD",
            },
          },
        ],
        "sku": "214452",
      }
    `);
  });

  it(`should return a promDressVariant02 preset when built for graphql`, () => {
    const promDressVariant02PresetGraphql =
      promDressVariant02().buildGraphql<TProductVariantDraft>();
    expect(promDressVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"key":"Pink","label":"Pink"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1920,
              "width": 1779,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png",
          },
        ],
        "key": "214452",
        "prices": [
          {
            "channel": undefined,
            "country": "ES",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12500,
                "currencyCode": "EUR",
              },
            },
          },
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 15000,
                "currencyCode": "AUD",
              },
            },
          },
        ],
        "sku": "214452",
      }
    `);
  });
});
