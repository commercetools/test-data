import type { TProductVariantDraft } from '../../../types';
import slateArmchair01 from './slate-armchair-01';

describe(`with slateArmchair01 preset`, () => {
  it(`should return a slateArmchair01 preset`, () => {
    const slateArmchair01Preset =
      slateArmchair01().build<TProductVariantDraft>();
    expect(slateArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive Ottomane",
              "en-GB": "- Includes ottoman",
              "en-US": "- Includes ottoman",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Schiefer grau:#708090",
              "en-GB": "Dark Slate Grey:#2F4F4F",
              "en-US": "Slate Gray:#708090",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4004,
              "w": 5009,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3498,
              "w": 5544,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.2.jpeg",
          },
        ],
        "key": "slateArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 59900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SARM-09",
      }
    `);
  });

  it(`should return a slateArmchair01 preset when built for graphql`, () => {
    const slateArmchair01PresetGraphql =
      slateArmchair01().buildGraphql<TProductVariantDraft>();
    expect(slateArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes ottoman","en-US":"- Includes ottoman","de-DE":"- Inklusive Ottomane"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Dark Slate Grey:#2F4F4F","de-DE":"Schiefer grau:#708090","en-US":"Slate Gray:#708090"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4004,
              "width": 5009,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3498,
              "width": 5544,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.2.jpeg",
          },
        ],
        "key": "slateArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "59900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
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
            "key": "59900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
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
            "key": "59900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SARM-09",
        "staged": true,
      }
    `);
  });
});
