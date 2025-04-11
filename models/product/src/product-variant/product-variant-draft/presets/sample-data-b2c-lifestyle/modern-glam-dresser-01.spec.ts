import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernGlamDresser01 from './modern-glam-dresser-01';

describe(`with modernGlamDresser01 preset`, () => {
  it(`should return a modernGlamDresser01 preset`, () => {
    const modernGlamDresser01Preset =
      modernGlamDresser01().build<TProductVariantDraft>();
    expect(modernGlamDresser01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "Braun:#a52a2a",
              "en-GB": "Brown:#a52a2a",
              "en-US": "Brown:#a52a2a",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
              "en-GB": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
              "en-US": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.3.jpeg",
          },
        ],
        "key": "modernGlamDresser01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "179900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 179900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "179900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 179900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "179900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 179900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MGD-01",
      }
    `);
  });

  it(`should return a modernGlamDresser01 preset when built for graphql`, () => {
    const modernGlamDresser01PresetGraphql =
      modernGlamDresser01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernGlamDresser01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"Brown:#a52a2a","en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","en-GB":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","de-DE":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.3.jpeg",
          },
        ],
        "key": "modernGlamDresser01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "179900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 179900,
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
            "key": "179900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 179900,
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
            "key": "179900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 179900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MGD-01",
      }
    `);
  });
});
