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
            "name": "search-color",
            "value": [
              "white",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "black",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "color-code",
            "value": "#FFFFFF",
          },
          {
            "name": "finish-code",
            "value": "#000000",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6000,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "modernUpholsteredQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
            "recurrencePolicy": undefined,
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
            "key": "259900GBP",
            "recurrencePolicy": undefined,
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
            "key": "259900USD",
            "recurrencePolicy": undefined,
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
            "name": "productspec",
            "value": "{"en-US":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","en-GB":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","de-DE":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site"}",
          },
          {
            "name": "search-color",
            "value": "["white"]",
          },
          {
            "name": "search-finish",
            "value": "["black"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFFFF"",
          },
          {
            "name": "finish-code",
            "value": ""#000000"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6000,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "modernUpholsteredQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
            "recurrencePolicy": undefined,
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
            "key": "259900GBP",
            "recurrencePolicy": undefined,
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
            "key": "259900USD",
            "recurrencePolicy": undefined,
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
