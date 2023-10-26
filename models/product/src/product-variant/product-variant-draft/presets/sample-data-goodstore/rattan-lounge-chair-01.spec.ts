import type { TProductVariantDraft } from '../../../types';
import rattanLoungeChair01 from './rattan-lounge-chair-01';

describe(`with rattanLoungeChair01 preset`, () => {
  it(`should return a rattanLoungeChair01 preset`, () => {
    const rattanLoungeChair01Preset =
      rattanLoungeChair01().build<TProductVariantDraft>();
    expect(rattanLoungeChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive 2 Kissen für Sitz und Rückenlehne",
              "en-GB": "- Includes 2 cushions for seat and backrest",
              "en-US": "- Includes 2 cushions for seat and backrest",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#EDEBE8",
              "en-GB": "#EDEBE8",
              "en-US": "#EDEBE8",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Perle",
              "en-GB": "Pearl",
              "en-US": "Pearl",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Rattan",
              "en-GB": "Rattan",
              "en-US": "Rattan",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E0AC58",
              "en-GB": "#E0AC58",
              "en-US": "#E0AC58",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4500,
              "w": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.2.jpeg",
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
              "centAmount": 19900,
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
              "centAmount": 19900,
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
              "centAmount": 19900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RLC-08",
      }
    `);
  });

  it(`should return a rattanLoungeChair01 preset when built for graphql`, () => {
    const rattanLoungeChair01PresetGraphql =
      rattanLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(rattanLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 2 cushions for seat and backrest","en-US":"- Includes 2 cushions for seat and backrest","de-DE":"- Inklusive 2 Kissen für Sitz und Rückenlehne"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#EDEBE8","de-DE":"#EDEBE8","en-US":"#EDEBE8"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Pearl","de-DE":"Perle","en-US":"Pearl"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Rattan","de-DE":"Rattan","en-US":"Rattan"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#E0AC58","en-US":"#E0AC58","de-DE":"#E0AC58"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4500,
              "width": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.2.jpeg",
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
                "centAmount": 19900,
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
                "centAmount": 19900,
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
                "centAmount": 19900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RLC-08",
      }
    `);
  });
});
