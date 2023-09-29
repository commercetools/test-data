import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa07 from './nala-two-seater-sofa-07';

describe(`with nalaTwoSeaterSofa07 preset`, () => {
  it(`should return a nalaTwoSeaterSofa07 preset`, () => {
    const nalaTwoSeaterSofa07Preset =
      nalaTwoSeaterSofa07().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa07Preset).toMatchInlineSnapshot(`
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
              "de-DE": "#121312",
              "en-GB": "#121312",
              "en-US": "#121312",
            },
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
            "name": "colorlabel",
            "value": {
              "de-DE": "Holzkohle",
              "en-GB": "Charcoal",
              "en-US": "Charcoal",
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
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286286-GrIUsCns.jpeg",
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
        "sku": "NTSS-07",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa07 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa07PresetGraphql =
      nalaTwoSeaterSofa07().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa07PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#121312","de-DE":"#121312","en-US":"#121312"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Charcoal","de-DE":"Holzkohle","en-US":"Charcoal"}",
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
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286286-GrIUsCns.jpeg",
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
        "sku": "NTSS-07",
      }
    `);
  });
});
