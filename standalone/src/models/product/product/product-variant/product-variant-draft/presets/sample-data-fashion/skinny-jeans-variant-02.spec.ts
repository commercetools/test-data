import type { TProductVariantDraft } from '../../../types';
import skinnyJeansVariant02 from './skinny-jeans-variant-02';

describe(`with skinnyJeansVariant02 preset`, () => {
  it(`should return a skinnyJeansVariant02 preset`, () => {
    const skinnyJeansVariant02Preset =
      skinnyJeansVariant02().build<TProductVariantDraft>();
    expect(skinnyJeansVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
            },
          },
          {
            "name": "fit",
            "value": {
              "key": "Slim",
              "label": "Slim",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 150,
              "w": 100,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg",
          },
        ],
        "key": "349700",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicy": undefined,
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
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 4500,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "349700",
      }
    `);
  });

  it(`should return a skinnyJeansVariant02 preset when built for graphql`, () => {
    const skinnyJeansVariant02PresetGraphql =
      skinnyJeansVariant02().buildGraphql<TProductVariantDraft>();
    expect(skinnyJeansVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": "{"key":"Large","label":"Large"}",
          },
          {
            "name": "fit",
            "value": "{"key":"Slim","label":"Slim"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 150,
              "width": 100,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg",
          },
        ],
        "key": "349700",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicy": undefined,
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
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 4500,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "349700",
      }
    `);
  });
});
