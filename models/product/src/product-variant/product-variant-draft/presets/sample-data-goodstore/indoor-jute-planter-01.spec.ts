import type { TProductVariantDraft } from '../../../types';
import indoorJutePlanter01 from './indoor-jute-planter-01';

describe(`with indoorJutePlanter01 preset`, () => {
  it(`should return a indoorJutePlanter01 preset`, () => {
    const indoorJutePlanter01Preset =
      indoorJutePlanter01().build<TProductVariantDraft>();
    expect(indoorJutePlanter01Preset).toMatchInlineSnapshot(`
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
              "en-GB": "Large",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_419644892-f445UIr6.jpeg",
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
              "centAmount": 3299,
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
              "centAmount": 3299,
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
              "centAmount": 3299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "IJP-03",
      }
    `);
  });

  it(`should return a indoorJutePlanter01 preset when built for graphql`, () => {
    const indoorJutePlanter01PresetGraphql =
      indoorJutePlanter01().buildGraphql<TProductVariantDraft>();
    expect(indoorJutePlanter01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Plant not included","en-US":"- Plant not included","de-DE":"- Pflanze nicht im Lieferumfang enthalten"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"Large"}",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_419644892-f445UIr6.jpeg",
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
                "centAmount": 3299,
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
                "centAmount": 3299,
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
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "IJP-03",
      }
    `);
  });
});
