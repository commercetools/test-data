import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import tanQueenBed01 from './tan-queen-bed-01';

describe(`with tanQueenBed01 preset`, () => {
  it(`should return a tanQueenBed01 preset`, () => {
    const tanQueenBed01Preset = tanQueenBed01().build<TProductVariantDraft>();
    expect(tanQueenBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten",
              "en-GB": "- Assembly included in delivery",
              "en-US": "- Assembly included in delivery",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#503A01",
              "en-GB": "#503A01",
              "en-US": "#503A01",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Briarsmoke",
              "en-GB": "Briarsmoke",
              "en-US": "Briarsmoke",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#5B523C",
              "en-GB": "#5B523C",
              "en-US": "#5B523C",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Tan_Queen_Bed-1.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LPQB-084",
      }
    `);
  });

  it(`should return a tanQueenBed01 preset when built for graphql`, () => {
    const tanQueenBed01PresetGraphql =
      tanQueenBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(tanQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#503A01","de-DE":"#503A01","en-US":"#503A01"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Briarsmoke","de-DE":"Briarsmoke","en-US":"Briarsmoke"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#5B523C","en-US":"#5B523C","de-DE":"#5B523C"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Tan_Queen_Bed-1.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
        "sku": "LPQB-084",
      }
    `);
  });
});
