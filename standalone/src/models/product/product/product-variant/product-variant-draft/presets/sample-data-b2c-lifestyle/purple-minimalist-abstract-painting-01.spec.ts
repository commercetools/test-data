import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import purpleMinimalistAbstractPainting01 from './purple-minimalist-abstract-painting-01';

describe(`with purpleMinimalistAbstractPainting01 preset`, () => {
  it(`should return a purpleMinimalistAbstractPainting01 preset`, () => {
    const purpleMinimalistAbstractPainting01Preset =
      purpleMinimalistAbstractPainting01().build<TProductVariantDraft>();
    expect(purpleMinimalistAbstractPainting01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Acryl auf Leinwand
      - 2 Fuß mal 2 Fuß",
              "en-GB": "- Acrylic on canvas
      - 2ft by 2ft",
              "en-US": "- Acrylic on canvas
      - 2ft by 2ft",
            },
          },
          {
            "name": "search-color",
            "value": "purple",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Violett",
              "en-GB": "Purple",
              "en-US": "Purple",
            },
          },
          {
            "name": "color-code",
            "value": "#800080",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2903,
              "w": 3148,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Minimalist_Abstract_Painting-1.1.jpeg",
          },
        ],
        "key": "purpleMinimalistAbstractPainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3999EUR_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "PMAP-01",
      }
    `);
  });

  it(`should return a purpleMinimalistAbstractPainting01 preset when built for graphql`, () => {
    const purpleMinimalistAbstractPainting01PresetGraphql =
      purpleMinimalistAbstractPainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(purpleMinimalistAbstractPainting01PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\\n- 2ft by 2ft"}",
          },
          {
            "name": "search-color",
            "value": ""purple"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Purple","de-DE":"Violett","en-US":"Purple"}",
          },
          {
            "name": "color-code",
            "value": ""#800080"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2903,
              "width": 3148,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Minimalist_Abstract_Painting-1.1.jpeg",
          },
        ],
        "key": "purpleMinimalistAbstractPainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2999,
                "currencyCode": "EUR",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3999EUR_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3999,
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
            "key": "2999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2999,
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
            "key": "2999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "PMAP-01",
      }
    `);
  });
});
