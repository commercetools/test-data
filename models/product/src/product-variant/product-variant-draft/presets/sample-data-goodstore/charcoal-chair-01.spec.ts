import type { TProductVariantDraft } from '../../../types';
import charcoalChair01 from './charcoal-chair-01';

describe(`with charcoalChair01 preset`, () => {
  it(`should return a charcoalChair01 preset`, () => {
    const charcoalChair01Preset =
      charcoalChair01().build<TProductVariantDraft>();
    expect(charcoalChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Stuhl",
              "en-GB": "- Includes 1 chair",
              "en-US": "- Includes 1 chair",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Holzkohle",
              "en-GB": "Charcoal",
              "en-US": "Charcoal",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Eiche",
              "en-GB": "Oak",
              "en-US": "Oak",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E2C897",
              "en-GB": "#E2C897",
              "en-US": "#E2C897",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5309,
              "w": 3300,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 5906,
              "w": 5906,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.1.jpeg",
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
              "centAmount": 9900,
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
              "centAmount": 9900,
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
              "centAmount": 9900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCH-093",
      }
    `);
  });

  it(`should return a charcoalChair01 preset when built for graphql`, () => {
    const charcoalChair01PresetGraphql =
      charcoalChair01().buildGraphql<TProductVariantDraft>();
    expect(charcoalChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#000","de-DE":"#000","en-US":"#000"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Charcoal","de-DE":"Holzkohle","en-US":"Charcoal"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Oak","de-DE":"Eiche","en-US":"Oak"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#E2C897","de-DE":"#E2C897","en-US":"#E2C897"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5309,
              "width": 3300,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 5906,
              "width": 5906,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.1.jpeg",
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
                "centAmount": 9900,
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
                "centAmount": 9900,
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
                "centAmount": 9900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCH-093",
      }
    `);
  });
});
