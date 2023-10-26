import type { TProductVariantDraft } from '../../../types';
import leatherWeaveChair01 from './leather-weave-chair-01';

describe(`with leatherWeaveChair01 preset`, () => {
  it(`should return a leatherWeaveChair01 preset`, () => {
    const leatherWeaveChair01Preset =
      leatherWeaveChair01().build<TProductVariantDraft>();
    expect(leatherWeaveChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
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
            "name": "new-arrival",
            "value": true,
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
              "de-DE": "#BC5724",
              "en-GB": "#BC5724",
              "en-US": "#BC5724",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E3AF81",
              "en-GB": "#E3AF81",
              "en-US": "#E3AF81",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4500,
              "w": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
              "centAmount": 39900,
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
              "centAmount": 34900,
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
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BA-092",
      }
    `);
  });

  it(`should return a leatherWeaveChair01 preset when built for graphql`, () => {
    const leatherWeaveChair01PresetGraphql =
      leatherWeaveChair01().buildGraphql<TProductVariantDraft>();
    expect(leatherWeaveChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color-filter",
            "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
          },
          {
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Oak","de-DE":"Eiche","en-US":"Oak"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#BC5724","de-DE":"#BC5724","en-US":"#BC5724"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#E3AF81","de-DE":"#E3AF81","en-US":"#E3AF81"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4500,
              "width": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
                "centAmount": 39900,
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
                "centAmount": 34900,
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
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BA-092",
      }
    `);
  });
});
