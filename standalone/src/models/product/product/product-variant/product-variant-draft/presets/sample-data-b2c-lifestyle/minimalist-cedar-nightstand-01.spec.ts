import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistCedarNightstand01 from './minimalist-cedar-nightstand-01';

describe(`with minimalistCedarNightstand01 preset`, () => {
  it(`should return a minimalistCedarNightstand01 preset`, () => {
    const minimalistCedarNightstand01Preset =
      minimalistCedarNightstand01().build<TProductVariantDraft>();
    expect(minimalistCedarNightstand01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "search-finish",
            "value": "gray",
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Gainsboro",
              "en-GB": "Gainsboro",
              "en-US": "Gainsboro",
            },
          },
          {
            "name": "finish-code",
            "value": "#dcdcdc",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.2.jpeg",
          },
        ],
        "key": "minimalistCedarNightstand01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 7900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CNS-0434",
      }
    `);
  });

  it(`should return a minimalistCedarNightstand01 preset when built for graphql`, () => {
    const minimalistCedarNightstand01PresetGraphql =
      minimalistCedarNightstand01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistCedarNightstand01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "search-finish",
            "value": ""gray"",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gainsboro","de-DE":"Gainsboro","en-US":"Gainsboro"}",
          },
          {
            "name": "finish-code",
            "value": ""#dcdcdc"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.2.jpeg",
          },
        ],
        "key": "minimalistCedarNightstand01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "7900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7900,
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
            "key": "7900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7900,
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
            "key": "7900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 7900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CNS-0434",
      }
    `);
  });
});
