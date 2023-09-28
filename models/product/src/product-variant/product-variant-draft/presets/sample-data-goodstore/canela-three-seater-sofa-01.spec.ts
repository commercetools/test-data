import type { TProductVariantDraft } from '../../../types';
import canelaThreeSeaterSofa01 from './canela-three-seater-sofa-01';

describe(`with canelaThreeSeaterSofa01 preset`, () => {
  it(`should return a canelaThreeSeaterSofa01 preset`, () => {
    const canelaThreeSeaterSofa01Preset =
      canelaThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Lederpolsterung
      - 3-Sitzer",
              "en-GB": "- Leather upholstery 
      - 3 seater",
              "en-US": "- Leather upholstery 
      - 3 seater",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
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
              "de-DE": "#CE9A17",
              "en-GB": "#CE9A17",
              "en-US": "#CE9A17",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Kiefer",
              "en-GB": "Pine",
              "en-US": "Pine",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E4B849",
              "en-GB": "#E4B849",
              "en-US": "#E4B849",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3353,
              "w": 5029,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Canela%203-Seater%20Sofa-y5sV4Zny.jpeg",
          },
          {
            "dimensions": {
              "h": 780,
              "w": 1170,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/sofa%20(1)-Y1K6YUDE.jpeg",
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
              "centAmount": 259900,
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
              "centAmount": 259900,
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
              "centAmount": 259900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CTSS-098",
      }
    `);
  });

  it(`should return a canelaThreeSeaterSofa01 preset when built for graphql`, () => {
    const canelaThreeSeaterSofa01PresetGraphql =
      canelaThreeSeaterSofa01().buildGraphql<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Leather upholstery \\n- 3 seater","de-DE":"- Lederpolsterung\\n- 3-Sitzer","en-US":"- Leather upholstery \\n- 3 seater"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#CE9A17","de-DE":"#CE9A17","en-US":"#CE9A17"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Pine","de-DE":"Kiefer","en-US":"Pine"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#E4B849","de-DE":"#E4B849","en-US":"#E4B849"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3353,
              "width": 5029,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Canela%203-Seater%20Sofa-y5sV4Zny.jpeg",
          },
          {
            "dimensions": {
              "height": 780,
              "width": 1170,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/sofa%20(1)-Y1K6YUDE.jpeg",
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
                "centAmount": 259900,
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
                "centAmount": 259900,
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
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CTSS-098",
      }
    `);
  });
});
