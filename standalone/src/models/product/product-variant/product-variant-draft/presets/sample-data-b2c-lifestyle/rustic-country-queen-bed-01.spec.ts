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
              "de-DE": "Bräunen:#D2B48C",
              "en-GB": "Tan:#D2B48C",
              "en-US": "Tan:#D2B48C",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Sattel braun:#8b4513",
              "en-GB": "Saddle Brown:#8b4513",
              "en-US": "Saddle Brown:#8b4513",
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
            "recurrencePolicyRef": undefined,
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
            "recurrencePolicyRef": undefined,
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
            "recurrencePolicyRef": undefined,
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
            "value": "{"en-US":"Tan:#D2B48C","en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","en-GB":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","de-DE":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site"}",
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
            "recurrencePolicyRef": undefined,
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
            "recurrencePolicyRef": undefined,
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
            "recurrencePolicyRef": undefined,
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
