import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa06 from './nala-two-seater-sofa-06';

describe(`with nalaTwoSeaterSofa06 preset`, () => {
  it(`should return a nalaTwoSeaterSofa06 preset`, () => {
    const nalaTwoSeaterSofa06Preset =
      nalaTwoSeaterSofa06().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa06Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "new-arrival",
            "value": true,
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
              "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
              "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
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
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Dunkles See grün",
              "en-GB": "Dark Sea Green",
              "en-US": "Dark Sea Green",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "color-code",
            "value": {
              "de-DE": "#8FBC8F",
              "en-GB": "#8FBC8F",
              "en-US": "#8FBC8F",
            },
          },
          {
            "name": "finish-code",
            "value": {
              "de-DE": "#000000",
              "en-GB": "#000000",
              "en-US": "#000000",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
          },
        ],
        "key": "nalaTwoSeaterSofa06",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NTSS-06",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa06 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa06PresetGraphql =
      nalaTwoSeaterSofa06().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa06PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Dark Sea Green","de-DE":"Dunkles See grün","en-US":"Dark Sea Green"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "color-code",
            "value": "{"en-US":"#8FBC8F","en-GB":"#8FBC8F","de-DE":"#8FBC8F"}",
          },
          {
            "name": "finish-code",
            "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
          },
        ],
        "key": "nalaTwoSeaterSofa06",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "NTSS-06",
      }
    `);
  });
});
