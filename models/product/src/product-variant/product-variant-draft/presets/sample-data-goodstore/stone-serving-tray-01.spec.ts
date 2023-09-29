import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import stoneServingTray01 from './stone-serving-tray-01';

describe(`with stoneServingTray01 preset`, () => {
  it(`should return a stoneServingTray01 preset`, () => {
    const stoneServingTray01Preset =
      stoneServingTray01().build<TProductVariantDraft>();
    expect(stoneServingTray01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Zerbrechlich",
              "en-GB": "- Fragile",
              "en-US": "- Fragile",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Stein",
              "en-GB": "Stone",
              "en-US": "Stone",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#6B6B6B",
              "en-GB": "#6B6B6B",
              "en-US": "#6B6B6B",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2358,
              "w": 4125,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_574599257-fOKRHCDx.jpeg",
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
              "centAmount": 2499,
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
              "centAmount": 2499,
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
              "centAmount": 2499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SST-02",
      }
    `);
  });

  it(`should return a stoneServingTray01 preset when built for graphql`, () => {
    const stoneServingTray01PresetGraphql =
      stoneServingTray01().buildGraphql<TProductVariantDraftGraphql>();
    expect(stoneServingTray01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Fragile","en-US":"- Fragile","de-DE":"- Zerbrechlich"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Stone","de-DE":"Stein","en-US":"Stone"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#6B6B6B","en-US":"#6B6B6B","de-DE":"#6B6B6B"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2358,
              "width": 4125,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_574599257-fOKRHCDx.jpeg",
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
                "centAmount": 2499,
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
                "centAmount": 2499,
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
                "centAmount": 2499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SST-02",
      }
    `);
  });
});
