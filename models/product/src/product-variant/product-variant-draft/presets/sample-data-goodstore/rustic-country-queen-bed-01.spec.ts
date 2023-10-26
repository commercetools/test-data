import type { TProductVariantDraft } from '../../../types';
import rusticCountryQueenBed01 from './rustic-country-queen-bed-01';

describe(`with rusticCountryQueenBed01 preset`, () => {
  it(`should return a rusticCountryQueenBed01 preset`, () => {
    const rusticCountryQueenBed01Preset =
      rusticCountryQueenBed01().build<TProductVariantDraft>();
    expect(rusticCountryQueenBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "tan",
              "en-GB": "tan",
              "en-US": "tan",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
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
              "de-DE": "rosybrown",
              "en-GB": "rosybrown",
              "en-US": "rosybrown",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
              "en-GB": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
              "en-US": "- Leather upholstery
      - Standard Queen size
      - Assembly on site",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Country_Queen_Bed-1.1.jpeg",
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
              "centAmount": 329900,
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
              "centAmount": 329900,
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
              "centAmount": 329900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RCQB-01",
      }
    `);
  });

  it(`should return a rusticCountryQueenBed01 preset when built for graphql`, () => {
    const rusticCountryQueenBed01PresetGraphql =
      rusticCountryQueenBed01().buildGraphql<TProductVariantDraft>();
    expect(rusticCountryQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"tan","en-GB":"tan","de-DE":"tan"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Tan","en-GB":"Tan","de-DE":"Bräunen"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Briarsmoke","en-GB":"Briarsmoke","de-DE":"Briarsmoke"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"rosybrown","en-GB":"rosybrown","de-DE":"rosybrown"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","en-GB":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","de-DE":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Country_Queen_Bed-1.1.jpeg",
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
                "centAmount": 329900,
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
                "centAmount": 329900,
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
                "centAmount": 329900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RCQB-01",
      }
    `);
  });
});
