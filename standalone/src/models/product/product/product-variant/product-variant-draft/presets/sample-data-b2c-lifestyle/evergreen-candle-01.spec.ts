import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import evergreenCandle01 from './evergreen-candle-01';

describe(`with evergreenCandle01 preset`, () => {
  it(`should return a evergreenCandle01 preset`, () => {
    const evergreenCandle01Preset =
      evergreenCandle01().build<TProductVariantDraft>();
    expect(evergreenCandle01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
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
            "name": "color-label",
            "value": {
              "de-DE": "Helles Oliv",
              "en-GB": "Light Olive",
              "en-US": "Light Olive",
            },
          },
          {
            "name": "color-code",
            "value": "#BAB86C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2160,
              "w": 3840,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2160,
              "w": 3840,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 6720,
              "w": 4480,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.2.jpeg",
          },
        ],
        "key": "evergreenCandle01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "EC-0993",
      }
    `);
  });

  it(`should return a evergreenCandle01 preset when built for graphql`, () => {
    const evergreenCandle01PresetGraphql =
      evergreenCandle01().buildGraphql<TProductVariantDraftGraphql>();
    expect(evergreenCandle01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Olive","de-DE":"Helles Oliv","en-US":"Light Olive"}",
          },
          {
            "name": "color-code",
            "value": ""#BAB86C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2160,
              "width": 3840,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2160,
              "width": 3840,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 6720,
              "width": 4480,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.2.jpeg",
          },
        ],
        "key": "evergreenCandle01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
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
            "key": "299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
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
            "key": "299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "EC-0993",
      }
    `);
  });
});
