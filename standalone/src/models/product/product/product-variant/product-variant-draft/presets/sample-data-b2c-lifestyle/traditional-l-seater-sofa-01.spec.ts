import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import traditionalLSeaterSofa01 from './traditional-l-seater-sofa-01';

describe(`with traditionalLSeaterSofa01 preset`, () => {
  it(`should return a traditionalLSeaterSofa01 preset`, () => {
    const traditionalLSeaterSofa01Preset =
      traditionalLSeaterSofa01().build<TProductVariantDraft>();
    expect(traditionalLSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Baumwollbezug
      - Wurfkissen um Lieferumfang enthalten
      - Selbstmontage",
              "en-GB": "- Cotton upholstery
      - Comes with accent pillows
      - Assembly on site",
              "en-US": "- Cotton upholstery
      - Comes with accent pillows
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
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
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
              "de-DE": "#F5F5DC",
              "en-GB": "#F5F5DC",
              "en-US": "#F5F5DC",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.3.jpeg",
          },
        ],
        "key": "traditionalLSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "359900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 359900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "359900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 359900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "359900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 359900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TLSS-01",
      }
    `);
  });

  it(`should return a traditionalLSeaterSofa01 preset when built for graphql`, () => {
    const traditionalLSeaterSofa01PresetGraphql =
      traditionalLSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(traditionalLSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","en-GB":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","de-DE":"- Baumwollbezug\\n- Wurfkissen um Lieferumfang enthalten\\n- Selbstmontage"}",
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
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#F5F5DC","en-GB":"#F5F5DC","de-DE":"#F5F5DC"}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.3.jpeg",
          },
        ],
        "key": "traditionalLSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "359900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 359900,
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
            "key": "359900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 359900,
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
            "key": "359900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 359900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "TLSS-01",
      }
    `);
  });
});
