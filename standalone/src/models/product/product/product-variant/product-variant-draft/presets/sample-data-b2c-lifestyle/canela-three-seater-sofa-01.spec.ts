import type { TProductVariantDraft } from '../../../types';
import canelaThreeSeaterSofa01 from './canela-three-seater-sofa-01';

describe(`with canelaThreeSeaterSofa01 preset`, () => {
  it(`should return a canelaThreeSeaterSofa01 preset`, () => {
    const canelaThreeSeaterSofa01Preset =
      canelaThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Lederpolsterung
      - 3-Sitzer",
              "en-GB": "- Leather upholstery 
      - 3 seater",
              "en-US": "- Leather upholstery 
      - 3 seater",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Peru",
              "en-GB": "Peru",
              "en-US": "Peru",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#CD853F",
              "en-GB": "#CD853F",
              "en-US": "#CD853F",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#D2B48C",
              "en-GB": "#D2B48C",
              "en-US": "#D2B48C",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3353,
              "w": 5029,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 780,
              "w": 1170,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "canelaThreeSeaterSofa01",
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
        "sku": "CTSS-098",
      }
    `);
  });

  it(`should return a canelaThreeSeaterSofa01 preset when built for graphql`, () => {
    const canelaThreeSeaterSofa01PresetGraphql =
      canelaThreeSeaterSofa01().buildGraphql<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Leather upholstery \\n- 3 seater","de-DE":"- Lederpolsterung\\n- 3-Sitzer","en-US":"- Leather upholstery \\n- 3 seater"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Peru","de-DE":"Peru","en-US":"Peru"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#CD853F","en-GB":"#CD853F","de-DE":"#CD853F"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#D2B48C","en-GB":"#D2B48C","de-DE":"#D2B48C"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3353,
              "width": 5029,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 780,
              "width": 1170,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "canelaThreeSeaterSofa01",
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
        "sku": "CTSS-098",
      }
    `);
  });
});
