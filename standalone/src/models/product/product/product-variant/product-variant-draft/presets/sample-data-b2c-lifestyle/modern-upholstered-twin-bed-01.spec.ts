import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed01 from './modern-upholstered-twin-bed-01';

describe(`with modernUpholsteredTwinBed01 preset`, () => {
  it(`should return a modernUpholsteredTwinBed01 preset`, () => {
    const modernUpholsteredTwinBed01Preset =
      modernUpholsteredTwinBed01().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed01Preset).toMatchInlineSnapshot(`
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
            "value": "white",
          },
          {
            "name": "search-finish",
            "value": "gray",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
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
            "value": "#FFFFFF",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.3.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed01",
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
        "sku": "MUTB-01",
      }
    `);
  });

  it(`should return a modernUpholsteredTwinBed01 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed01PresetGraphql =
      modernUpholsteredTwinBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
          },
          {
            "name": "search-color",
            "value": ""white"",
          },
          {
            "name": "search-finish",
            "value": ""gray"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Lightslate Grey","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFFFF"",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.3.jpeg",
          },
        ],
        "key": "modernUpholsteredTwinBed01",
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
        "sku": "MUTB-01",
      }
    `);
  });
});
