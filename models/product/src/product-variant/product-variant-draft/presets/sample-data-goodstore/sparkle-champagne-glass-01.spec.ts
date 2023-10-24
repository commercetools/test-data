import type { TProductVariantDraft } from '../../../types';
import sparkleChampagneGlass01 from './sparkle-champagne-glass-01';

describe(`with sparkleChampagneGlass01 preset`, () => {
  it(`should return a sparkleChampagneGlass01 preset`, () => {
    const sparkleChampagneGlass01Preset =
      sparkleChampagneGlass01().build<TProductVariantDraft>();
    expect(sparkleChampagneGlass01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sparkle_Champagne_Glass-1.1.jpeg",
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
              "centAmount": 4599,
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
              "centAmount": 4599,
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
              "centAmount": 4599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SCG-09",
      }
    `);
  });

  it(`should return a sparkleChampagneGlass01 preset when built for graphql`, () => {
    const sparkleChampagneGlass01PresetGraphql =
      sparkleChampagneGlass01().buildGraphql<TProductVariantDraft>();
    expect(sparkleChampagneGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","en-US":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sparkle_Champagne_Glass-1.1.jpeg",
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
                "centAmount": 4599,
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
                "centAmount": 4599,
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
                "centAmount": 4599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SCG-09",
      }
    `);
  });
});
