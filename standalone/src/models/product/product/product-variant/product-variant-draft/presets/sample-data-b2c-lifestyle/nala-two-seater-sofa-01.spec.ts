import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa01 from './nala-two-seater-sofa-01';

describe(`with nalaTwoSeaterSofa01 preset`, () => {
  it(`should return a nalaTwoSeaterSofa01 preset`, () => {
    const nalaTwoSeaterSofa01Preset =
      nalaTwoSeaterSofa01().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa01Preset).toMatchInlineSnapshot(`
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
              "gray",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "black",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Helles Schiefer grau",
              "en-GB": "Lightslate Gray",
              "en-US": "Lightslate Gray",
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
            "value": "#778899",
          },
          {
            "name": "finish-code",
            "value": "#000000",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3376,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.1.jpeg",
          },
        ],
        "key": "nalaTwoSeaterSofa01",
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
        "sku": "NTSS-01",
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa01 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa01PresetGraphql =
      nalaTwoSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "["gray"]",
          },
          {
            "name": "search-finish",
            "value": "["black"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Lightslate Gray","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "color-code",
            "value": ""#778899"",
          },
          {
            "name": "finish-code",
            "value": ""#000000"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3376,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.1.jpeg",
          },
        ],
        "key": "nalaTwoSeaterSofa01",
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
        "sku": "NTSS-01",
      }
    `);
  });
});
