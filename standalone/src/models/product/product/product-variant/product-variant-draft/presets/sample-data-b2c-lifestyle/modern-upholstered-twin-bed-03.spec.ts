import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed03 from './modern-upholstered-twin-bed-03';

describe(`with modernUpholsteredTwinBed03 preset`, () => {
  it(`should return a modernUpholsteredTwinBed03 preset`, () => {
    const modernUpholsteredTwinBed03Preset =
      modernUpholsteredTwinBed03().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed03Preset).toMatchInlineSnapshot(`
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
            "value": "gray",
          },
          {
            "name": "search-finish",
            "value": "gray",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Grey",
              "en-US": "Gray",
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
            "value": "#808080",
          },
          {
            "name": "finish-code",
            "value": "#778899",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.2.jpeg",
          },
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.3.jpeg",
          },
          {
            "dimensions": {
              "h": 4000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.1.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed03",
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
        "sku": "MUTB-03",
      }
    `);
  });

  it(`should return a modernUpholsteredTwinBed03 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed03PresetGraphql =
      modernUpholsteredTwinBed03().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
          },
          {
            "name": "search-color",
            "value": ""gray"",
          },
          {
            "name": "search-finish",
            "value": ""gray"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Grey","de-DE":"Grau","en-US":"Gray"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#808080"",
          },
          {
            "name": "finish-code",
            "value": ""#778899"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.2.jpeg",
          },
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.3.jpeg",
          },
          {
            "dimensions": {
              "height": 4000,
              "width": 4000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.1.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed03",
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
        "sku": "MUTB-03",
      }
    `);
  });
});
