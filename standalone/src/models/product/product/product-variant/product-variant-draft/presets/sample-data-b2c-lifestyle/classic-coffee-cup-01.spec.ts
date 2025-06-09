import type { TProductVariantDraft } from '../../../types';
import classicCoffeeCup01 from './classic-coffee-cup-01';

describe(`with classicCoffeeCup01 preset`, () => {
  it(`should return a classicCoffeeCup01 preset`, () => {
    const classicCoffeeCup01Preset =
      classicCoffeeCup01().build<TProductVariantDraft>();
    expect(classicCoffeeCup01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive passender Untertasse
      - Das Set enthält 4 Tassen und Untertassen",
              "en-GB": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
              "en-US": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
            },
          },
          {
            "name": "search-color",
            "value": [
              "white",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "color-code",
            "value": "#FFFFFF",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 4153,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.2.jpeg",
          },
        ],
        "key": "classicCoffeeCup01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "6999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 6999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "6999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 6999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "6999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 6999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCC-09",
      }
    `);
  });

  it(`should return a classicCoffeeCup01 preset when built for graphql`, () => {
    const classicCoffeeCup01PresetGraphql =
      classicCoffeeCup01().buildGraphql<TProductVariantDraft>();
    expect(classicCoffeeCup01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes a matching saucer\\n- Set includes 4 cups and saucers","de-DE":"- Inklusive passender Untertasse\\n- Das Set enthält 4 Tassen und Untertassen","en-US":"- Includes a matching saucer\\n- Set includes 4 cups and saucers"}",
          },
          {
            "name": "search-color",
            "value": "["white"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFFFF"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 4153,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.2.jpeg",
          },
        ],
        "key": "classicCoffeeCup01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "6999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 6999,
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
            "key": "6999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 6999,
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
            "key": "6999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 6999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCC-09",
      }
    `);
  });
});
