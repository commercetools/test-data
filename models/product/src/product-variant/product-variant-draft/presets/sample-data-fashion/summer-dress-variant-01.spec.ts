import type { TProductVariantDraft } from '../../../types';
import summerDressVariant01 from './summer-dress-variant-01';

describe(`with summerDressVariant01 preset`, () => {
  it(`should return a summerDressVariant01 preset`, () => {
    const summerDressVariant01Preset =
      summerDressVariant01().build<TProductVariantDraft>();
    expect(summerDressVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "key": "White",
              "label": "White",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 298,
              "w": 276,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg",
          },
        ],
        "key": "791840",
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
              "centAmount": 7500,
              "currencyCode": "EUR",
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
              "centAmount": 8000,
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
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7000,
              "currencyCode": "AUD",
            },
          },
        ],
        "sku": "791840",
      }
    `);
  });

  it(`should return a summerDressVariant01 preset when built for graphql`, () => {
    const summerDressVariant01PresetGraphql =
      summerDressVariant01().buildGraphql<TProductVariantDraft>();
    expect(summerDressVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"key":"White","label":"White"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 298,
              "width": 276,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg",
          },
        ],
        "key": "791840",
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
                "centAmount": 7500,
                "currencyCode": "EUR",
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
                "centAmount": 8000,
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
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7000,
                "currencyCode": "AUD",
              },
            },
          },
        ],
        "sku": "791840",
        "staged": true,
      }
    `);
  });
});
