import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredQueenBed01 from './modern-upholstered-queen-bed-01';

describe(`with modernUpholsteredQueenBed01 preset`, () => {
  it(`should return a modernUpholsteredQueenBed01 preset`, () => {
    const modernUpholsteredQueenBed01Preset =
      modernUpholsteredQueenBed01().build<TProductVariantDraft>();
    expect(modernUpholsteredQueenBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "white",
              "en-GB": "white",
              "en-US": "white",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "White",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "black",
              "en-GB": "black",
              "en-US": "black",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Ebony",
              "en-GB": "Ebony",
              "en-US": "Ebony",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
              "en-GB": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
              "en-US": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6000,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Queen_Bed-1.1.jpeg",
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
        "sku": "MUQB-01",
      }
    `);
  });

  it(`should return a modernUpholsteredQueenBed01 preset when built for graphql`, () => {
    const modernUpholsteredQueenBed01PresetGraphql =
      modernUpholsteredQueenBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"white","en-GB":"white","de-DE":"white"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"White","en-GB":"White","de-DE":"White"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"black","en-GB":"black","de-DE":"black"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Ebony","en-GB":"Ebony","de-DE":"Ebony"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","en-GB":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","de-DE":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6000,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Queen_Bed-1.1.jpeg",
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
        "sku": "MUQB-01",
      }
    `);
  });
});
