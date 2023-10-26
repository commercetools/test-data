import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import wineBottleOpener01 from './wine-bottle-opener-01';

describe(`with wineBottleOpener01 preset`, () => {
  it(`should return a wineBottleOpener01 preset`, () => {
    const wineBottleOpener01Preset =
      wineBottleOpener01().build<TProductVariantDraft>();
    expect(wineBottleOpener01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl",
              "en-GB": "- Stainless steel",
              "en-US": "- Stainless steel",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#C0C0C0",
              "label": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3456,
              "w": 5184,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg",
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
              "centAmount": 199,
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
              "centAmount": 199,
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
              "centAmount": 199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "WOP-09",
      }
    `);
  });

  it(`should return a wineBottleOpener01 preset when built for graphql`, () => {
    const wineBottleOpener01PresetGraphql =
      wineBottleOpener01().buildGraphql<TProductVariantDraftGraphql>();
    expect(wineBottleOpener01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel","en-US":"- Stainless steel","de-DE":"- Edelstahl"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3456,
              "width": 5184,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg",
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
                "centAmount": 199,
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
                "centAmount": 199,
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
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "WOP-09",
      }
    `);
  });
});
