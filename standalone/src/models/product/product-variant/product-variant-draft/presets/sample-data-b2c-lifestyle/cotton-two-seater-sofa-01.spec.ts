import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonTwoSeaterSofa01 from './cotton-two-seater-sofa-01';

describe(`with cottonTwoSeaterSofa01 preset`, () => {
  it(`should return a cottonTwoSeaterSofa01 preset`, () => {
    const cottonTwoSeaterSofa01Preset =
      cottonTwoSeaterSofa01().build<TProductVariantDraft>();
    expect(cottonTwoSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2969,
              "w": 5035,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 637,
              "w": 1000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "cottonTwoSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "54900EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 54900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "54900GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 54900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "54900USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 54900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CTSS-0983",
      }
    `);
  });

  it(`should return a cottonTwoSeaterSofa01 preset when built for graphql`, () => {
    const cottonTwoSeaterSofa01PresetGraphql =
      cottonTwoSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonTwoSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2969,
              "width": 5035,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 637,
              "width": 1000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "cottonTwoSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "54900EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 54900,
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
            "key": "54900GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 54900,
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
            "key": "54900USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 54900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CTSS-0983",
      }
    `);
  });
});
