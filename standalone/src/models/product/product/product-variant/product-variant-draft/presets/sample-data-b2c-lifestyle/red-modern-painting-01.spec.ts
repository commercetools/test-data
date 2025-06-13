import type { TProductVariantDraft } from '../../../types';
import redModernPainting01 from './red-modern-painting-01';

describe(`with redModernPainting01 preset`, () => {
  it(`should return a redModernPainting01 preset`, () => {
    const redModernPainting01Preset =
      redModernPainting01().build<TProductVariantDraft>();
    expect(redModernPainting01Preset).toMatchInlineSnapshot(`
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
            "value": [
              {
                "de-DE": "Rot",
                "en-GB": "Red",
                "en-US": "Red",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Rot",
              "en-GB": "Red",
              "en-US": "Red",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#ff0000",
              "en-GB": "#ff0000",
              "en-US": "#ff0000",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3894,
              "w": 3893,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Red_Modern_Painting-1.1.jpeg",
          },
        ],
        "key": "redModernPainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RMP-01",
      }
    `);
  });

  it(`should return a redModernPainting01 preset when built for graphql`, () => {
    const redModernPainting01PresetGraphql =
      redModernPainting01().buildGraphql<TProductVariantDraft>();
    expect(redModernPainting01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","en-US":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Red","en-GB":"Red","de-DE":"Rot"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Red","de-DE":"Rot","en-US":"Red"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#ff0000","en-GB":"#ff0000","de-DE":"#ff0000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3894,
              "width": 3893,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Red_Modern_Painting-1.1.jpeg",
          },
        ],
        "key": "redModernPainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RMP-01",
      }
    `);
  });
});
