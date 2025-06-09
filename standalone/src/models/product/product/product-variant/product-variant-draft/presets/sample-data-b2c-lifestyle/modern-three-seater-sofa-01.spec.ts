import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernThreeSeaterSofa01 from './modern-three-seater-sofa-01';

describe(`with modernThreeSeaterSofa01 preset`, () => {
  it(`should return a modernThreeSeaterSofa01 preset`, () => {
    const modernThreeSeaterSofa01Preset =
      modernThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(modernThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-GB": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-US": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
            },
          },
          {
            "name": "search-color",
            "value": [
              "gray",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "brown",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Dunkles Schiefer grau",
              "en-GB": "Dark Slate Grey",
              "en-US": "Dark Slate Gray",
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
            "value": "#2F4F4F",
          },
          {
            "name": "finish-code",
            "value": "#8b4513",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.4.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.3.jpeg",
          },
        ],
        "key": "modernThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "249900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 249900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "249900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 249900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "249900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 249900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MTSS-01",
      }
    `);
  });

  it(`should return a modernThreeSeaterSofa01 preset when built for graphql`, () => {
    const modernThreeSeaterSofa01PresetGraphql =
      modernThreeSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","en-GB":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","de-DE":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site"}",
          },
          {
            "name": "search-color",
            "value": "["gray"]",
          },
          {
            "name": "search-finish",
            "value": "["brown"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Dark Slate Grey","de-DE":"Dunkles Schiefer grau","en-US":"Dark Slate Gray"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": ""#2F4F4F"",
          },
          {
            "name": "finish-code",
            "value": ""#8b4513"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.4.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.3.jpeg",
          },
        ],
        "key": "modernThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "249900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 249900,
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
            "key": "249900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 249900,
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
            "key": "249900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 249900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MTSS-01",
      }
    `);
  });
});
