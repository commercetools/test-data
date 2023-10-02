import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed03 from './modern-upholstered-twin-bed-03';

describe(`with modernUpholsteredTwinBed03 preset`, () => {
  it(`should return a modernUpholsteredTwinBed03 preset`, () => {
    const modernUpholsteredTwinBed03Preset =
      modernUpholsteredTwinBed03().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Oak",
              "en-GB": "Oak",
              "en-US": "Oak",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "grey",
              "en-GB": "grey",
              "en-US": "grey",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Grey",
              "en-GB": "Grey",
              "en-US": "Grey",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "lightslategrey",
              "en-GB": "lightslategrey",
              "en-US": "lightslategrey",
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
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178461-bmOvu0su.jpeg",
          },
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178544-9vyswQY1.jpeg",
          },
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178443-saXZIXa5.jpeg",
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
              "centAmount": 45000,
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
              "centAmount": 45000,
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
              "centAmount": 45000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MUTB-03",
      }
    `);
  });

  it(`should return a modernUpholsteredTwinBed03 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed03PresetGraphql =
      modernUpholsteredTwinBed03().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Oak","en-GB":"Oak","de-DE":"Oak"}",
          },
          {
            "name": "color",
            "value": "{"en-US":"grey","en-GB":"grey","de-DE":"grey"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Grey","en-GB":"Grey","de-DE":"Grey"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"lightslategrey","en-GB":"lightslategrey","de-DE":"lightslategrey"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178461-bmOvu0su.jpeg",
          },
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178544-9vyswQY1.jpeg",
          },
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178443-saXZIXa5.jpeg",
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
                "centAmount": 45000,
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
                "centAmount": 45000,
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
                "centAmount": 45000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MUTB-03",
      }
    `);
  });
});
