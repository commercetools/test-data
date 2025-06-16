import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed02 from './modern-upholstered-twin-bed-02';

describe(`with modernUpholsteredTwinBed02 preset`, () => {
  it(`should return a modernUpholsteredTwinBed02 preset`, () => {
    const modernUpholsteredTwinBed02Preset =
      modernUpholsteredTwinBed02().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
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
                "de-DE": "Grau",
                "en-GB": "Grey",
                "en-US": "Gray",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "See grün",
              "en-GB": "Sea Green",
              "en-US": "Sea Green",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Helles Schiefer grau",
              "en-GB": "Lightslate Grey",
              "en-US": "Lightslate Gray",
            },
          },
          {
            "name": "color-code",
            "value": "#2E8B57",
          },
          {
            "name": "finish-code",
            "value": "#778899",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.3.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.1.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MUTB-02",
      }
    `);
  });

  it(`should return a modernUpholsteredTwinBed02 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed02PresetGraphql =
      modernUpholsteredTwinBed02().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Sea Green","de-DE":"See grün","en-US":"Sea Green"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#2E8B57"",
          },
          {
            "name": "finish-code",
            "value": ""#778899"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.3.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.1.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45000,
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
            "key": "45000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45000,
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
            "key": "45000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MUTB-02",
      }
    `);
  });
});
