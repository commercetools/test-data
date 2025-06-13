import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import traditionalThreeSeaterSofa01 from './traditional-three-seater-sofa-01';

describe(`with traditionalThreeSeaterSofa01 preset`, () => {
  it(`should return a traditionalThreeSeaterSofa01 preset`, () => {
    const traditionalThreeSeaterSofa01Preset =
      traditionalThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(traditionalThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Dreisitzer
      - Samtbezug
      - Selbstmontage",
              "en-GB": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
              "en-US": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
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
              "de-DE": "Mittel meer grün",
              "en-GB": "Medium Sea Green",
              "en-US": "Medium Sea Green",
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
            "value": {
              "de-DE": "#3CB371",
              "en-GB": "#3CB371",
              "en-US": "#3CB371",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#8b4513",
              "en-GB": "#8b4513",
              "en-US": "#8b4513",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "traditionalThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "239900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 239900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "239900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 239900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "239900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 239900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TTSS-01",
      }
    `);
  });

  it(`should return a traditionalThreeSeaterSofa01 preset when built for graphql`, () => {
    const traditionalThreeSeaterSofa01PresetGraphql =
      traditionalThreeSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(traditionalThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","en-GB":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","de-DE":"- Dreisitzer\\n- Samtbezug\\n- Selbstmontage"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Medium Sea Green","de-DE":"Mittel meer grün","en-US":"Medium Sea Green"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#3CB371","en-GB":"#3CB371","de-DE":"#3CB371"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#8b4513","en-GB":"#8b4513","de-DE":"#8b4513"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "traditionalThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "239900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 239900,
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
            "key": "239900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 239900,
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
            "key": "239900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 239900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "TTSS-01",
      }
    `);
  });
});
