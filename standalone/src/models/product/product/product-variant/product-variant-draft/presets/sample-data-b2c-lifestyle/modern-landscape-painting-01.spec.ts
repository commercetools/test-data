import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernLandscapePainting01 from './modern-landscape-painting-01';

describe(`with modernLandscapePainting01 preset`, () => {
  it(`should return a modernLandscapePainting01 preset`, () => {
    const modernLandscapePainting01Preset =
      modernLandscapePainting01().build<TProductVariantDraft>();
    expect(modernLandscapePainting01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Öl auf Leinwand
      - Rahmen nicht im Lieferumfang enthalten
      - 3 Fuß mal 4 Fuß",
              "en-GB": "- Oil on canvas
      - Frame not included
      - 3ft by 4ft",
              "en-US": "- Oil on canvas
      - Frame not included
      - 3ft by 4ft",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Blau",
                "en-GB": "Blue",
                "en-US": "Blue",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Himmel blau",
              "en-GB": "Sky Blue",
              "en-US": "Sky Blue",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#87CEEB",
              "en-GB": "#87CEEB",
              "en-US": "#87CEEB",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5355,
              "w": 5313,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Landscape_Painting-1.1.jpeg",
          },
        ],
        "key": "modernLandscapePainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 5299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MLP-01",
      }
    `);
  });

  it(`should return a modernLandscapePainting01 preset when built for graphql`, () => {
    const modernLandscapePainting01PresetGraphql =
      modernLandscapePainting01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernLandscapePainting01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Oil on canvas\\n- Frame not included\\n- 3ft by 4ft","de-DE":"- Öl auf Leinwand\\n- Rahmen nicht im Lieferumfang enthalten\\n- 3 Fuß mal 4 Fuß","en-US":"- Oil on canvas\\n- Frame not included\\n- 3ft by 4ft"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Blue","en-GB":"Blue","de-DE":"Blau"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Sky Blue","de-DE":"Himmel blau","en-US":"Sky Blue"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#87CEEB","en-GB":"#87CEEB","de-DE":"#87CEEB"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5355,
              "width": 5313,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Landscape_Painting-1.1.jpeg",
          },
        ],
        "key": "modernLandscapePainting01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "5299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5299,
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
            "key": "5299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5299,
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
            "key": "5299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 5299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MLP-01",
      }
    `);
  });
});
