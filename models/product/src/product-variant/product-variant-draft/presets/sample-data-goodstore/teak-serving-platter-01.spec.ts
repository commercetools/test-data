import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import teakServingPlatter01 from './teak-serving-platter-01';

describe(`with teakServingPlatter01 preset`, () => {
  it(`should return a teakServingPlatter01 preset`, () => {
    const teakServingPlatter01Preset =
      teakServingPlatter01().build<TProductVariantDraft>();
    expect(teakServingPlatter01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Hergestellt aus natürlichem Teakholz
      - Handwäsche nur",
              "en-GB": "- Made of natural teak
      - Hand wash only",
              "en-US": "- Made of natural teak
      - Hand wash only",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2389,
              "w": 4331,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Teak_Serving_Platter-1.1.jpeg",
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
              "centAmount": 1299,
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
              "centAmount": 1299,
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
              "centAmount": 1299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TST-02",
      }
    `);
  });

  it(`should return a teakServingPlatter01 preset when built for graphql`, () => {
    const teakServingPlatter01PresetGraphql =
      teakServingPlatter01().buildGraphql<TProductVariantDraftGraphql>();
    expect(teakServingPlatter01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Made of natural teak\\n- Hand wash only","en-US":"- Made of natural teak\\n- Hand wash only","de-DE":"- Hergestellt aus natürlichem Teakholz\\n- Handwäsche nur"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2389,
              "width": 4331,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Teak_Serving_Platter-1.1.jpeg",
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
                "centAmount": 1299,
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
                "centAmount": 1299,
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
                "centAmount": 1299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "TST-02",
      }
    `);
  });
});
