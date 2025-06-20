import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import purpleLandscapePainting01 from './purple-landscape-painting-01';

describe(`with purpleLandscapePainting01 preset`, () => {
  it(`should return a purpleLandscapePainting01 preset`, () => {
    const purpleLandscapePainting01Preset =
      purpleLandscapePainting01().build<TProductVariantDraft>();
    expect(purpleLandscapePainting01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Ölgemälde auf Leinwand
      - Rahmen nicht im Lieferumfang enthalten
      - Größe: 4 Fuß x 3 Fuß",
              "en-GB": "- Oil painting on canvas
      - Frame not included
      - Size: 4ft by 3ft",
              "en-US": "- Oil painting on canvas
      - Frame not included
      - Size: 4ft by 3ft",
            },
          },
          {
            "name": "search-color",
            "value": "purple",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Violett",
              "en-GB": "Purple",
              "en-US": "Purple",
            },
          },
          {
            "name": "color-code",
            "value": "#800080",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3902,
              "w": 3755,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Landscape_Painting-1.1.jpeg",
          },
        ],
        "key": "purpleLandscapePainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "8999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 8999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "8999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 8999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "8999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 8999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BLP-01",
      }
    `);
  });

  it(`should return a purpleLandscapePainting01 preset when built for graphql`, () => {
    const purpleLandscapePainting01PresetGraphql =
      purpleLandscapePainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(purpleLandscapePainting01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Oil painting on canvas\\n- Frame not included\\n- Size: 4ft by 3ft","de-DE":"- Ölgemälde auf Leinwand\\n- Rahmen nicht im Lieferumfang enthalten\\n- Größe: 4 Fuß x 3 Fuß","en-US":"- Oil painting on canvas\\n- Frame not included\\n- Size: 4ft by 3ft"}",
          },
          {
            "name": "search-color",
            "value": ""purple"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Purple","de-DE":"Violett","en-US":"Purple"}",
          },
          {
            "name": "color-code",
            "value": ""#800080"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3902,
              "width": 3755,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Landscape_Painting-1.1.jpeg",
          },
        ],
        "key": "purpleLandscapePainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "8999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 8999,
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
            "key": "8999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 8999,
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
            "key": "8999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 8999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BLP-01",
      }
    `);
  });
});
