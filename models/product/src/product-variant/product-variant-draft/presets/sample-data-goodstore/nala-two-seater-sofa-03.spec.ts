import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa03 from './nala-two-seater-sofa-03';

describe(`with nalaTwoSeaterSofa03 preset`, () => {
  it(`should return a nalaTwoSeaterSofa03 preset`, () => {
    const nalaTwoSeaterSofa03Preset =
      nalaTwoSeaterSofa03().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#B13704",
              "en-GB": "#B13704",
              "en-US": "#B13704",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Terrakotta",
              "en-GB": "Terracotta",
              "en-US": "Terracotta",
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
              "key": "#FFA500",
              "label": {
                "de-DE": "Orange",
                "en-GB": "Orange",
                "en-US": "Orange",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.2.jpeg",
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
        "sku": "NTSS-03",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa03 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa03PresetGraphql =
      nalaTwoSeaterSofa03().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-GB":"#B13704","de-DE":"#B13704","en-US":"#B13704"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Terracotta","de-DE":"Terrakotta","en-US":"Terracotta"}",
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
            "name": "productspec",
            "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.2.jpeg",
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
        "sku": "NTSS-03",
      }
    `);
  });
});
