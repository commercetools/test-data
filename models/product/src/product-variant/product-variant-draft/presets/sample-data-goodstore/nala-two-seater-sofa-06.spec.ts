import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa06 from './nala-two-seater-sofa-06';

describe(`with nalaTwoSeaterSofa06 preset`, () => {
  it(`should return a nalaTwoSeaterSofa06 preset`, () => {
    const nalaTwoSeaterSofa06Preset =
      nalaTwoSeaterSofa06().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa06Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
              "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
              "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#96A789",
              "en-GB": "#96A789",
              "en-US": "#96A789",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Salbeigrün",
              "en-GB": "Sage Green",
              "en-US": "Sage Green",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Ebenholz",
              "en-GB": "Ebony",
              "en-US": "Ebony",
            },
          },
          {
            "name": "new-arrival",
            "value": true,
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#090909",
              "en-GB": "#090909",
              "en-US": "#090909",
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
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sage-1KpTSqVS.jpeg",
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
              "centAmount": 129900,
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
              "centAmount": 129900,
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
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NTSS-06",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa06 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa06PresetGraphql =
      nalaTwoSeaterSofa06().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa06PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#96A789","de-DE":"#96A789","en-US":"#96A789"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Sage Green","de-DE":"Salbeigrün","en-US":"Sage Green"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
          },
          {
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sage-1KpTSqVS.jpeg",
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
                "centAmount": 129900,
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
                "centAmount": 129900,
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
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "NTSS-06",
      }
    `);
  });
});
