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
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Schwarz:#000000",
              "en-GB": "Black:#000000",
              "en-US": "Black:#000000",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
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
            "value": "{"en-US":"White:#FFFFFF","en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"Black:#000000","en-GB":"Black:#000000","de-DE":"Schwarz:#000000"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","en-GB":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site","de-DE":"- Cotton Upholstery \\n- Standard Queen size\\n- Assembly on site"}",
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
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
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
