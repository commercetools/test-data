import type { TProductVariantDraft } from '../../../types';
import sandTeaCup01 from './sand-tea-cup-01';

describe(`with sandTeaCup01 preset`, () => {
  it(`should return a sandTeaCup01 preset`, () => {
    const sandTeaCup01Preset = sandTeaCup01().build<TProductVariantDraft>();
    expect(sandTeaCup01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tasse",
              "en-GB": "- Includes 1 mug",
              "en-US": "- Includes 1 mug",
            },
          },
          {
            "name": "search-color",
            "value": [
              {
                "de-DE": "Gelb",
                "en-GB": "Yellow",
                "en-US": "Yellow",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Sand",
              "en-GB": "Sand",
              "en-US": "Sand",
            },
          },
          {
            "name": "color-code",
            "value": "#C2B280",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4020,
              "w": 6046,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sand_Tea_Cup-1.1.jpeg",
          },
        ],
        "key": "sandTeaCup01",
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
        "sku": "STM-09",
      }
    `);
  });

  it(`should return a sandTeaCup01 preset when built for graphql`, () => {
    const sandTeaCup01PresetGraphql =
      sandTeaCup01().buildGraphql<TProductVariantDraft>();
    expect(sandTeaCup01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 mug","en-US":"- Includes 1 mug","de-DE":"- Enthält 1 Tasse"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Sand","de-DE":"Sand","en-US":"Sand"}",
          },
          {
            "name": "color-code",
            "value": ""#C2B280"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4020,
              "width": 6046,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sand_Tea_Cup-1.1.jpeg",
          },
        ],
        "key": "sandTeaCup01",
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
        "sku": "STM-09",
      }
    `);
  });
});
