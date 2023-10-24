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
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#E3E4E4",
              "en-GB": "#E3E4E4",
              "en-US": "#E3E4E4",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Aschfahl",
              "en-GB": "Ashen",
              "en-US": "Ashen",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ashen_Rug-1.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#E3E4E4","de-DE":"#E3E4E4","en-US":"#E3E4E4"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Ashen","de-DE":"Aschfahl","en-US":"Ashen"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ashen_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ashen_Rug-1.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
