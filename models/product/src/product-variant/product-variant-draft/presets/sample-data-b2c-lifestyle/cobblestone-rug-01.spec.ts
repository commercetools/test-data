import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cobblestoneRug01 from './cobblestone-rug-01';

describe(`with cobblestoneRug01 preset`, () => {
  it(`should return a cobblestoneRug01 preset`, () => {
    const cobblestoneRug01Preset =
      cobblestoneRug01().build<TProductVariantDraft>();
    expect(cobblestoneRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 5 Fuß x 3 Fuß",
              "en-GB": "- 5ft x 3ft",
              "en-US": "- 5ft x 3ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Hell grau:#D3D3D3",
              "en-GB": "Light Grey:#D3D3D3",
              "en-US": "Light Gray:#D3D3D3",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2820,
              "w": 7006,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cobblestone_Rug-1.1.jpeg",
          },
        ],
        "key": "cobblestoneRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CR-098",
      }
    `);
  });

  it(`should return a cobblestoneRug01 preset when built for graphql`, () => {
    const cobblestoneRug01PresetGraphql =
      cobblestoneRug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cobblestoneRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 5ft x 3ft","de-DE":"- 5 Fuß x 3 Fuß","en-US":"- 5ft x 3ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3","en-US":"Light Gray:#D3D3D3"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2820,
              "width": 7006,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cobblestone_Rug-1.1.jpeg",
          },
        ],
        "key": "cobblestoneRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12999,
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
            "key": "12999GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12999,
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
            "key": "12999USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CR-098",
      }
    `);
  });
});
