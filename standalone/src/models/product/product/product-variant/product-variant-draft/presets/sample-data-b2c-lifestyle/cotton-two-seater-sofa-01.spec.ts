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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#FFFFFF",
              "en-GB": "#FFFFFF",
              "en-US": "#FFFFFF",
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
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
            "name": "search-color",
            "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#FFFFFF","en-GB":"#FFFFFF","de-DE":"#FFFFFF"}",
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
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
            "recurrencePolicy": undefined,
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
