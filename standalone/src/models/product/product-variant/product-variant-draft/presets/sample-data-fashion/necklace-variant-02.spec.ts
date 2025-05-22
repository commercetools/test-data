import type { TProductVariantDraft } from '../../../types';
import necklaceVariant02 from './necklace-variant-02';

describe(`with necklace variant preset`, () => {
  it(`should return a necklace preset`, () => {
    const necklaceVariant02Preset =
      necklaceVariant02().build<TProductVariantDraft>();
    expect(necklaceVariant02Preset).toMatchInlineSnapshot(`
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 241,
              "w": 209,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
          },
        ],
        "key": "42610",
        "prices": [
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
              "centAmount": 1575,
              "currencyCode": "AUD",
            },
          },
        ],
        "sku": "42610",
      }
    `);
  });

  it(`should return a necklace preset when built for graphql`, () => {
    const necklaceVariant02PresetGraphql =
      necklaceVariant02().buildGraphql<TProductVariantDraft>();
    expect(necklaceVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "{"key":"Jewelry","label":"Jewelry"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 241,
              "width": 209,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
          },
        ],
        "key": "42610",
        "prices": [
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
                "centAmount": 1575,
                "currencyCode": "AUD",
              },
            },
          },
        ],
        "sku": "42610",
      }
    `);
  });
});
