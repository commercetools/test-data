import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa05 from './nala-two-seater-sofa-05';

describe(`with nalaTwoSeaterSofa05 preset`, () => {
  it(`should return a nalaTwoSeaterSofa05 preset`, () => {
    const nalaTwoSeaterSofa05Preset =
      nalaTwoSeaterSofa05().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa05Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finish",
            "value": {
              "de-DE": "#090909",
              "en-GB": "#090909",
              "en-US": "#090909",
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
            "name": "colorlabel",
            "value": {
              "de-DE": "Federgrau",
              "en-GB": "Feather Gray",
              "en-US": "Feather Gray",
            },
          },
          {
            "name": "new-arrival",
            "value": true,
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#EDEDED",
              "en-GB": "#EDEDED",
              "en-US": "#EDEDED",
            },
          },
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
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-5.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-5.2.jpeg",
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
        "sku": "NTSS-05",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa05 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa05PresetGraphql =
      nalaTwoSeaterSofa05().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa05PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finish",
            "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Feather Gray","de-DE":"Federgrau","en-US":"Feather Gray"}",
          },
          {
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#EDEDED","de-DE":"#EDEDED","en-US":"#EDEDED"}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-5.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-5.2.jpeg",
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
        "sku": "NTSS-05",
      }
    `);
  });
});
