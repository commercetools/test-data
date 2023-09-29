import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import pinkAbstractPainting01 from './pink-abstract-painting-01';

describe(`with pinkAbstractPainting01 preset`, () => {
  it(`should return a pinkAbstractPainting01 preset`, () => {
    const pinkAbstractPainting01Preset =
      pinkAbstractPainting01().build<TProductVariantDraft>();
    expect(pinkAbstractPainting01Preset).toMatchInlineSnapshot(`
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3873,
              "w": 3873,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_105588712-1zzmDPbe.jpeg",
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
              "centAmount": 5999,
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
              "centAmount": 5999,
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
              "centAmount": 5999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "PAP-01",
      }
    `);
  });

  it(`should return a pinkAbstractPainting01 preset when built for graphql`, () => {
    const pinkAbstractPainting01PresetGraphql =
      pinkAbstractPainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(pinkAbstractPainting01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\\n- 2ft by 2ft"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3873,
              "width": 3873,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_105588712-1zzmDPbe.jpeg",
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
                "centAmount": 5999,
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
                "centAmount": 5999,
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
                "centAmount": 5999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "PAP-01",
      }
    `);
  });
});
