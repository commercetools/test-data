import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernThreeSeaterSofa01 from './modern-three-seater-sofa-01';

describe(`with modernThreeSeaterSofa01 preset`, () => {
  it(`should return a modernThreeSeaterSofa01 preset`, () => {
    const modernThreeSeaterSofa01Preset =
      modernThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(modernThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#292828",
              "en-GB": "#292828",
              "en-US": "#292828",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Charcoal",
              "en-GB": "Charcoal",
              "en-US": "Charcoal",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Briarsmoke",
              "en-GB": "Briarsmoke",
              "en-US": "Briarsmoke",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#5c513d",
              "en-GB": "#5c513d",
              "en-US": "#5c513d",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-GB": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-US": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
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
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369085-YrPs6-AN.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302368965-v3zLuGxk.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369766-4ePJc6Jk.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369724-aEvV9s8N.jpeg",
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
              "centAmount": 249900,
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
              "centAmount": 249900,
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
              "centAmount": 249900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MTSS-01",
      }
    `);
  });

  it(`should return a modernThreeSeaterSofa01 preset when built for graphql`, () => {
    const modernThreeSeaterSofa01PresetGraphql =
      modernThreeSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"#292828","en-GB":"#292828","de-DE":"#292828"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Charcoal","en-GB":"Charcoal","de-DE":"Charcoal"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Briarsmoke","en-GB":"Briarsmoke","de-DE":"Briarsmoke"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"#5c513d","en-GB":"#5c513d","de-DE":"#5c513d"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","en-GB":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","de-DE":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369085-YrPs6-AN.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302368965-v3zLuGxk.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369766-4ePJc6Jk.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369724-aEvV9s8N.jpeg",
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
                "centAmount": 249900,
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
                "centAmount": 249900,
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
                "centAmount": 249900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MTSS-01",
      }
    `);
  });
});
