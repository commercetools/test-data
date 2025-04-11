import type { TProductVariantDraft } from '../../../types';
import canelaThreeSeaterSofa01 from './canela-three-seater-sofa-01';

describe(`with canelaThreeSeaterSofa01 preset`, () => {
  it(`should return a canelaThreeSeaterSofa01 preset`, () => {
    const canelaThreeSeaterSofa01Preset =
      canelaThreeSeaterSofa01().build<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Lederpolsterung
      - 3-Sitzer",
              "en-GB": "- Leather upholstery 
      - 3 seater",
              "en-US": "- Leather upholstery 
      - 3 seater",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Peru:#CD853F",
              "en-GB": "Peru:#CD853F",
              "en-US": "Peru:#CD853F",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Bräunen:#D2B48C",
              "en-GB": "Tan:#D2B48C",
              "en-US": "Tan:#D2B48C",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3353,
              "w": 5029,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 780,
              "w": 1170,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "canelaThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CTSS-098",
      }
    `);
  });

  it(`should return a canelaThreeSeaterSofa01 preset when built for graphql`, () => {
    const canelaThreeSeaterSofa01PresetGraphql =
      canelaThreeSeaterSofa01().buildGraphql<TProductVariantDraft>();
    expect(canelaThreeSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Leather upholstery \\n- 3 seater","de-DE":"- Lederpolsterung\\n- 3-Sitzer","en-US":"- Leather upholstery \\n- 3 seater"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Peru:#CD853F","de-DE":"Peru:#CD853F","en-US":"Peru:#CD853F"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3353,
              "width": 5029,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 780,
              "width": 1170,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg",
          },
        ],
        "key": "canelaThreeSeaterSofa01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "259900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 259900,
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
            "key": "259900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 259900,
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
            "key": "259900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CTSS-098",
      }
    `);
  });
});
