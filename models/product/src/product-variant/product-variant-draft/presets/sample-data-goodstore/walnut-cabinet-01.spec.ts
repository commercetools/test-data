import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import walnutCabinet01 from './walnut-cabinet-01';

describe(`with walnutCabinet01 preset`, () => {
  it(`should return a walnutCabinet01 preset`, () => {
    const walnutCabinet01Preset =
      walnutCabinet01().build<TProductVariantDraft>();
    expect(walnutCabinet01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten",
              "en-GB": "- Assembly included in delivery",
              "en-US": "- Assembly included in delivery",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Nussbaum",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#964B00",
              "label": {
                "de-DE": "Dunkelbraun",
                "en-GB": "Dark Brown",
                "en-US": "Dark Brown",
              },
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#7A5905",
              "en-GB": "#7A5905",
              "en-US": "#7A5905",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2935,
              "w": 4400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35902325-W9YJNJS_.jpeg",
          },
          {
            "dimensions": {
              "h": 2935,
              "w": 4400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35911040-3WO5GjjU.jpeg",
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
              "centAmount": 159900,
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
              "centAmount": 159900,
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
              "centAmount": 159900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "WCS-09",
      }
    `);
  });

  it(`should return a walnutCabinet01 preset when built for graphql`, () => {
    const walnutCabinet01PresetGraphql =
      walnutCabinet01().buildGraphql<TProductVariantDraftGraphql>();
    expect(walnutCabinet01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Walnut","de-DE":"Nussbaum","en-US":"Walnut"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#7A5905","en-US":"#7A5905","de-DE":"#7A5905"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2935,
              "width": 4400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35902325-W9YJNJS_.jpeg",
          },
          {
            "dimensions": {
              "height": 2935,
              "width": 4400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35911040-3WO5GjjU.jpeg",
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
                "centAmount": 159900,
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
                "centAmount": 159900,
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
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "WCS-09",
      }
    `);
  });
});
