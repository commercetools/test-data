import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cubeJuteBasket01 from './cube-jute-basket-01';

describe(`with cubeJuteBasket01 preset`, () => {
  it(`should return a cubeJuteBasket01 preset`, () => {
    const cubeJuteBasket01Preset =
      cubeJuteBasket01().build<TProductVariantDraft>();
    expect(cubeJuteBasket01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Jute
      - Vormontiert
      - 1 Fuß x 1 Fuß x 1 Fuß",
              "en-GB": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
              "en-US": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#EEB348",
              "en-GB": "#EEB348",
              "en-US": "#EEB348",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Jute",
              "en-GB": "Jute",
              "en-US": "Jute",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3564,
              "w": 4684,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355946576-nRxA5NAP.jpeg",
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
        "sku": "CJB-01",
      }
    `);
  });

  it(`should return a cubeJuteBasket01 preset when built for graphql`, () => {
    const cubeJuteBasket01PresetGraphql =
      cubeJuteBasket01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cubeJuteBasket01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Jute\\n- Preassembled\\n- 1ft x 1ft x 1ft","de-DE":"- Jute\\n- Vormontiert\\n- 1 Fuß x 1 Fuß x 1 Fuß","en-US":"- Jute\\n- Preassembled\\n- 1ft x 1ft x 1ft"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#EEB348","de-DE":"#EEB348","en-US":"#EEB348"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Jute","de-DE":"Jute","en-US":"Jute"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3564,
              "width": 4684,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355946576-nRxA5NAP.jpeg",
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
        "sku": "CJB-01",
      }
    `);
  });
});