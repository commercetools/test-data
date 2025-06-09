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
            "name": "new-arrival",
            "value": true,
          },
          {
            "name": "search-color",
            "value": [
              "brown",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "yellow",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Sattel braun",
              "en-GB": "Saddle Brown",
              "en-US": "Saddle Brown",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#8b4513",
          },
          {
            "name": "finish-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4500,
              "w": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.2.jpeg",
          },
        ],
        "key": "leatherWeaveChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
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
            "name": "new-arrival",
            "value": "true",
          },
          {
            "name": "search-color",
            "value": "["brown"]",
          },
          {
            "name": "search-finish",
            "value": "["yellow"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#8b4513"",
          },
          {
            "name": "finish-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4500,
              "width": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.2.jpeg",
          },
        ],
        "key": "leatherWeaveChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
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
