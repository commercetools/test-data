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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Sattel braun",
              "en-GB": "Saddle Brown",
              "en-US": "Saddle Brown",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
          {
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "rusticCountryQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "329900EUR",
            "recurrencePolicy": undefined,
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
            "key": "329900GBP",
            "recurrencePolicy": undefined,
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
            "key": "329900USD",
            "recurrencePolicy": undefined,
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
            "name": "productspec",
            "value": "{"en-US":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","en-GB":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","de-DE":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Queen_Bed-1.1.jpeg",
          },
        ],
        "key": "rusticCountryQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "329900EUR",
            "recurrencePolicy": undefined,
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
            "key": "329900GBP",
            "recurrencePolicy": undefined,
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
            "key": "329900USD",
            "recurrencePolicy": undefined,
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
