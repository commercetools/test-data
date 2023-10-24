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
            "name": "finish",
            "value": {
              "de-DE": "lightslategrey",
              "en-GB": "lightslategrey",
              "en-US": "lightslategrey",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Oak",
              "en-GB": "Oak",
              "en-US": "Oak",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "lightseagreen",
              "en-GB": "lightseagreen",
              "en-US": "lightseagreen",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Sea Green",
              "en-GB": "Sea Green",
              "en-US": "Sea Green",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#0000FF",
              "label": {
                "de-DE": "Blau",
                "en-GB": "Blue",
                "en-US": "Blue",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.3.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "finish",
            "value": "{"en-US":"lightslategrey","en-GB":"lightslategrey","de-DE":"lightslategrey"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Oak","en-GB":"Oak","de-DE":"Oak"}",
          },
          {
            "name": "color",
            "value": "{"en-US":"lightseagreen","en-GB":"lightseagreen","de-DE":"lightseagreen"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Sea Green","en-GB":"Sea Green","de-DE":"Sea Green"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-2.3.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
