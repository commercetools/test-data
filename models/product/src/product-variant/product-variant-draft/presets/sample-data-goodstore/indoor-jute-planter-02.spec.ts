import type { TProductVariantDraft } from '../../../types';
import indoorJutePlanter02 from './indoor-jute-planter-02';

describe(`with indoorJutePlanter02 preset`, () => {
  it(`should return a indoorJutePlanter02 preset`, () => {
    const indoorJutePlanter02Preset =
      indoorJutePlanter02().build<TProductVariantDraft>();
    expect(indoorJutePlanter02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Pflanze nicht im Lieferumfang enthalten",
              "en-GB": "- Plant not included",
              "en-US": "- Plant not included",
            },
          },
          {
            "name": "size",
            "value": {
              "en-GB": "Small",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_446433445-GNpBuLn-.jpeg",
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
        "sku": "IJP-04",
      }
    `);
  });

  it(`should return a indoorJutePlanter02 preset when built for graphql`, () => {
    const indoorJutePlanter02PresetGraphql =
      indoorJutePlanter02().buildGraphql<TProductVariantDraft>();
    expect(indoorJutePlanter02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Plant not included","en-US":"- Plant not included","de-DE":"- Pflanze nicht im Lieferumfang enthalten"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"Small"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_446433445-GNpBuLn-.jpeg",
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
        "sku": "IJP-04",
      }
    `);
  });
});
