import type { TProductVariantDraft } from '../../../types';
import classicBeerMug01 from './classic-beer-mug-01';

describe(`with classicBeerMug01 preset`, () => {
  it(`should return a classicBeerMug01 preset`, () => {
    const classicBeerMug01Preset =
      classicBeerMug01().build<TProductVariantDraft>();
    expect(classicBeerMug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Tassen",
              "en-GB": "- Set includes 6 mugs",
              "en-US": "- Set includes 6 mugs",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Transparent:transparent",
              "en-GB": "Transparent:transparent",
              "en-US": "Transparent:transparent",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Glas:transparent",
              "en-GB": "Glass:transparent",
              "en-US": "Glass:transparent",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5409,
              "w": 3606,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Beer_Mug-1.1.jpeg",
          },
        ],
        "key": "classicBeerMug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CBM-03",
      }
    `);
  });

  it(`should return a classicBeerMug01 preset when built for graphql`, () => {
    const classicBeerMug01PresetGraphql =
      classicBeerMug01().buildGraphql<TProductVariantDraft>();
    expect(classicBeerMug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 mugs","de-DE":"- Das Set enthält 6 Tassen","en-US":"- Set includes 6 mugs"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5409,
              "width": 3606,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Beer_Mug-1.1.jpeg",
          },
        ],
        "key": "classicBeerMug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3599,
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
            "key": "3599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3599,
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
            "key": "3599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CBM-03",
      }
    `);
  });
});
