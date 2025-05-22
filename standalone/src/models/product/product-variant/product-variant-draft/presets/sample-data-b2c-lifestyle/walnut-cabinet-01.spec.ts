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
            "name": "finish",
            "value": {
              "de-DE": "Braun:#a52a2a",
              "en-GB": "Brown:#a52a2a",
              "en-US": "Brown:#a52a2a",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2935,
              "w": 4400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.2.jpeg",
          },
        ],
        "key": "walnutCabinet01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 159900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR_dist",
            "recurrencePolicyRef": undefined,
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
            "key": "159900GBP",
            "recurrencePolicyRef": undefined,
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
            "key": "159900USD",
            "recurrencePolicyRef": undefined,
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
            "name": "finish",
            "value": "{"en-GB":"Brown:#a52a2a","en-US":"Brown:#a52a2a","de-DE":"Braun:#a52a2a"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2935,
              "width": 4400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2935,
              "width": 4400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.2.jpeg",
          },
        ],
        "key": "walnutCabinet01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR",
            "recurrencePolicyRef": undefined,
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
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR_dist",
            "recurrencePolicyRef": undefined,
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
            "key": "159900GBP",
            "recurrencePolicyRef": undefined,
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
            "key": "159900USD",
            "recurrencePolicyRef": undefined,
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
