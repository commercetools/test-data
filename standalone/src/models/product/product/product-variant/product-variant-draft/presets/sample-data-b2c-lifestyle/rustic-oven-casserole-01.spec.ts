import type { TProductVariantDraft } from '../../../types';
import rusticOvenCasserole01 from './rustic-oven-casserole-01';

describe(`with rusticOvenCasserole01 preset`, () => {
  it(`should return a rusticOvenCasserole01 preset`, () => {
    const rusticOvenCasserole01Preset =
      rusticOvenCasserole01().build<TProductVariantDraft>();
    expect(rusticOvenCasserole01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Ohne Deckel",
              "en-GB": "- Does not include lid",
              "en-US": "- Does not include lid",
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3710,
              "w": 4746,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Oven_Casserole-1.1.jpeg",
          },
        ],
        "key": "rusticOvenCasserole01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RCC-09",
      }
    `);
  });

  it(`should return a rusticOvenCasserole01 preset when built for graphql`, () => {
    const rusticOvenCasserole01PresetGraphql =
      rusticOvenCasserole01().buildGraphql<TProductVariantDraft>();
    expect(rusticOvenCasserole01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Does not include lid","en-US":"- Does not include lid","de-DE":"- Ohne Deckel"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Peru:#CD853F","de-DE":"Peru:#CD853F","en-US":"Peru:#CD853F"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3710,
              "width": 4746,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Oven_Casserole-1.1.jpeg",
          },
        ],
        "key": "rusticOvenCasserole01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
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
            "key": "2599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
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
            "key": "2599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RCC-09",
      }
    `);
  });
});
