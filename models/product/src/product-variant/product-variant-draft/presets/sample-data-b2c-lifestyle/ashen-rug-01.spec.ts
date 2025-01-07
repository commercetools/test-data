import type { TProductVariantDraft } from '../../../types';
import ashenRug01 from './ashen-rug-01';

describe(`with ashenRug01 preset`, () => {
  it(`should return a ashenRug01 preset`, () => {
    const ashenRug01Preset = ashenRug01().build<TProductVariantDraft>();
    expect(ashenRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 5 Fuß x 7 Fuß
      - Nur chemische Reinigung",
              "en-GB": "- 5ft x 7ft
      - Dry-clean only",
              "en-US": "- 5ft x 7ft
      - Dry-clean only",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Gainsboro:#dcdcdc",
              "en-GB": "Gainsboro:#dcdcdc",
              "en-US": "Gainsboro:#dcdcdc",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
          },
        ],
        "key": "ashenRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 25000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ARG-56",
      }
    `);
  });

  it(`should return a ashenRug01 preset when built for graphql`, () => {
    const ashenRug01PresetGraphql =
      ashenRug01().buildGraphql<TProductVariantDraft>();
    expect(ashenRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 5ft x 7ft\\n- Dry-clean only","de-DE":"- 5 Fuß x 7 Fuß\\n- Nur chemische Reinigung","en-US":"- 5ft x 7ft\\n- Dry-clean only"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Gainsboro:#dcdcdc","de-DE":"Gainsboro:#dcdcdc","en-US":"Gainsboro:#dcdcdc"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg",
          },
        ],
        "key": "ashenRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19999EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19999,
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
            "key": "19999GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19999,
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
            "key": "19999USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 25000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ARG-56",
      }
    `);
  });
});
