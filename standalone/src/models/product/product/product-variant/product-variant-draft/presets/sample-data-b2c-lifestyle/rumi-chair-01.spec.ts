import type { TProductVariantDraft } from '../../../types';
import rumiChair01 from './rumi-chair-01';

describe(`with rumiChair01 preset`, () => {
  it(`should return a rumiChair01 preset`, () => {
    const rumiChair01Preset = rumiChair01().build<TProductVariantDraft>();
    expect(rumiChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung",
              "en-GB": "- Dry clean only",
              "en-US": "- Dry clean only",
            },
          },
          {
            "name": "search-color",
            "value": [
              "pink",
            ],
          },
          {
            "name": "search-finish",
            "value": [
              "gold",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Lavendel",
              "en-GB": "Lavender Blush",
              "en-US": "Lavender Blush",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "color-code",
            "value": "#fff0f5",
          },
          {
            "name": "finish-code",
            "value": "#FFD700",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rumi_Chair-1.1.jpeg",
          },
        ],
        "key": "rumiChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "15000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 15000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RAM-094",
      }
    `);
  });

  it(`should return a rumiChair01 preset when built for graphql`, () => {
    const rumiChair01PresetGraphql =
      rumiChair01().buildGraphql<TProductVariantDraft>();
    expect(rumiChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
          },
          {
            "name": "search-color",
            "value": "["pink"]",
          },
          {
            "name": "search-finish",
            "value": "["gold"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Lavender Blush","de-DE":"Lavendel","en-US":"Lavender Blush"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-code",
            "value": ""#fff0f5"",
          },
          {
            "name": "finish-code",
            "value": ""#FFD700"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rumi_Chair-1.1.jpeg",
          },
        ],
        "key": "rumiChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12999,
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
            "key": "12999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12999,
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
            "key": "15000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 15000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RAM-094",
      }
    `);
  });
});
