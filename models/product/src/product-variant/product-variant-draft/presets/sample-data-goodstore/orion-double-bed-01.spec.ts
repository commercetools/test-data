import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import orionDoubleBed01 from './orion-double-bed-01';

describe(`with orionDoubleBed01 preset`, () => {
  it(`should return a orionDoubleBed01 preset`, () => {
    const orionDoubleBed01Preset =
      orionDoubleBed01().build<TProductVariantDraft>();
    expect(orionDoubleBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten
      - Matratze nicht im Lieferumfang enthalten",
              "en-GB": "- Assembly included at delivery
      - Mattress not included",
              "en-US": "- Assembly included at delivery
      - Mattress not included",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Salbei",
              "en-GB": "Sage",
              "en-US": "Sage",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#718C86",
              "en-GB": "#718C86",
              "en-US": "#718C86",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Stahl",
              "en-GB": "Steel",
              "en-US": "Steel",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#CCCCCC ",
              "en-GB": "#CCCCCC ",
              "en-US": "#CCCCCC ",
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Orion%20Twin%20Bed-t5ZMuQok.jpeg",
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
              "centAmount": 159900,
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
              "centAmount": 159900,
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
              "centAmount": 159900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "OTB-07",
      }
    `);
  });

  it(`should return a orionDoubleBed01 preset when built for graphql`, () => {
    const orionDoubleBed01PresetGraphql =
      orionDoubleBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(orionDoubleBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included at delivery\\n- Mattress not included","de-DE":"- Montage im Lieferumfang enthalten\\n- Matratze nicht im Lieferumfang enthalten","en-US":"- Assembly included at delivery\\n- Mattress not included"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Sage","de-DE":"Salbei","en-US":"Sage"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#718C86","de-DE":"#718C86","en-US":"#718C86"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Steel","de-DE":"Stahl","en-US":"Steel"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#CCCCCC ","de-DE":"#CCCCCC ","en-US":"#CCCCCC "}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Orion%20Twin%20Bed-t5ZMuQok.jpeg",
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
                "centAmount": 159900,
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
                "centAmount": 159900,
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
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "OTB-07",
      }
    `);
  });
});
