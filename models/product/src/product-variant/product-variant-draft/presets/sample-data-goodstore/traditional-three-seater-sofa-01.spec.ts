import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import traditionalThreeSeaterSofa01 from './traditional-three-seater-sofa-01';

describe(`with traditionalThreeSeaterSofa01 preset`, () => {
  it(`should return a traditionalThreeSeaterSofa01 preset`, () => {
    const traditionalThreeSeaterSofa01Preset =
      traditionalThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(traditionalThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Dreisitzer
      - Samtbezug
      - Selbstmontage",
              "en-GB": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
              "en-US": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#09331c",
              "en-GB": "#09331c",
              "en-US": "#09331c",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Emerald",
              "en-GB": "Emerald",
              "en-US": "Emerald",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#202120",
              "en-GB": "#202120",
              "en-US": "#202120",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Espresso",
              "en-GB": "Espresso",
              "en-US": "Espresso",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#00FF00",
              "label": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670594-0wqoZ-dr.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670456-WsI7wbFD.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305671593-4T4P-rfg.jpeg",
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
              "centAmount": 239900,
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
              "centAmount": 239900,
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
              "centAmount": 239900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TTSS-01",
      }
    `);
  });

  it(`should return a traditionalThreeSeaterSofa01 preset when built for graphql`, () => {
    const traditionalThreeSeaterSofa01PresetGraphql =
      traditionalThreeSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(traditionalThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","en-GB":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","de-DE":"- Dreisitzer\\n- Samtbezug\\n- Selbstmontage"}",
          },
          {
            "name": "color",
            "value": "{"en-US":"#09331c","en-GB":"#09331c","de-DE":"#09331c"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Emerald","en-GB":"Emerald","de-DE":"Emerald"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"#202120","en-GB":"#202120","de-DE":"#202120"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Espresso","en-GB":"Espresso","de-DE":"Espresso"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670594-0wqoZ-dr.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670456-WsI7wbFD.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305671593-4T4P-rfg.jpeg",
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
                "centAmount": 239900,
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
                "centAmount": 239900,
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
                "centAmount": 239900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "TTSS-01",
      }
    `);
  });
});
