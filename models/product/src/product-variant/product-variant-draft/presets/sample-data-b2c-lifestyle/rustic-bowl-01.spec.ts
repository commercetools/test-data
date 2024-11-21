import type { TProductVariantDraft } from '../../../types';
import rusticBowl01 from './rustic-bowl-01';

describe(`with rusticBowl01 preset`, () => {
  it(`should return a rusticBowl01 preset`, () => {
    const rusticBowl01Preset = rusticBowl01().build<TProductVariantDraft>();
    expect(rusticBowl01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Schüssel",
              "en-GB": "- Includes 1 bowl",
              "en-US": "- Includes 1 bowl",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Braun:#a52a2a",
              "en-GB": "Brown:#a52a2a",
              "en-US": "Brown:#a52a2a",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3280,
              "w": 5105,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Bowl-1.1.jpeg",
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
            "key": "199EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "199USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RB-01",
      }
    `);
  });

  it(`should return a rusticBowl01 preset when built for graphql`, () => {
    const rusticBowl01PresetGraphql =
      rusticBowl01().buildGraphql<TProductVariantDraft>();
    expect(rusticBowl01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 bowl","en-US":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a","en-US":"Brown:#a52a2a"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3280,
              "width": 5105,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Bowl-1.1.jpeg",
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
            "key": "199EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 199,
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
            "key": "199GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 199,
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
            "key": "199USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RB-01",
      }
    `);
  });
});
