import type { TProductVariantDraft } from '../../../types';
import harmonyDrinkingGlass01 from './harmony-drinking-glass-01';

describe(`with harmonyDrinkingGlass01 preset`, () => {
  it(`should return a harmonyDrinkingGlass01 preset`, () => {
    const harmonyDrinkingGlass01Preset =
      harmonyDrinkingGlass01().build<TProductVariantDraft>();
    expect(harmonyDrinkingGlass01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Gläser",
              "en-GB": "- Set includes 6 glasses",
              "en-US": "- Set includes 6 glasses",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harmony%20Drinking%20Gla-5OspWt5l.jpeg",
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
        "sku": "HDG-02",
      }
    `);
  });

  it(`should return a harmonyDrinkingGlass01 preset when built for graphql`, () => {
    const harmonyDrinkingGlass01PresetGraphql =
      harmonyDrinkingGlass01().buildGraphql<TProductVariantDraft>();
    expect(harmonyDrinkingGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harmony%20Drinking%20Gla-5OspWt5l.jpeg",
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
        "sku": "HDG-02",
      }
    `);
  });
});