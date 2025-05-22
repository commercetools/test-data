import type { TProductVariantDraft } from '../../../types';
import necklaceVariant01 from './necklace-variant-01';

describe(`with necklace variant preset`, () => {
  it(`should return a necklace preset`, () => {
    const necklaceVariant01Preset =
      necklaceVariant01().build<TProductVariantDraft>();
    expect(necklaceVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "key": "Jewelry",
              "label": "Jewelry",
            },
          },
          {
            "name": "engraving",
            "value": "Happy Anniversary",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 122,
              "w": 103,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png",
          },
        ],
        "key": "752502",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5000,
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
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5000,
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
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5000,
              "currencyCode": "EUR",
            },
          },
        ],
        "sku": "752502",
      }
    `);
  });

  it(`should return a necklace preset when built for graphql`, () => {
    const necklaceVariant01PresetGraphql =
      necklaceVariant01().buildGraphql<TProductVariantDraft>();
    expect(necklaceVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "{"key":"Jewelry","label":"Jewelry"}",
          },
          {
            "name": "engraving",
            "value": ""Happy Anniversary"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 122,
              "width": 103,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png",
          },
        ],
        "key": "752502",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
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
                "centAmount": 5000,
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
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5000,
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
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5000,
                "currencyCode": "EUR",
              },
            },
          },
        ],
        "sku": "752502",
      }
    `);
  });
});
