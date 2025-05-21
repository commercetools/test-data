import type { TProductVariantDraft } from '../../../types';
import sallyArmchair01 from './sally-armchair-01';

describe(`with sallyArmchair01 preset`, () => {
  it(`should return a sallyArmchair01 preset`, () => {
    const sallyArmchair01Preset =
      sallyArmchair01().build<TProductVariantDraft>();
    expect(sallyArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird mit passendem Dekokissen geliefert",
              "en-GB": "- Comes with matching throw pillow",
              "en-US": "- Comes with matching throw pillow",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Rosa:#FFC0CB",
              "en-GB": "Pink:#FFC0CB",
              "en-US": "Pink:#FFC0CB",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Beige:#F5F5DC",
              "en-GB": "Beige:#F5F5DC",
              "en-US": "Beige:#F5F5DC",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sally_Armchair-1.1.jpeg",
          },
        ],
        "key": "sallyArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 19900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SARMO-034",
      }
    `);
  });

  it(`should return a sallyArmchair01 preset when built for graphql`, () => {
    const sallyArmchair01PresetGraphql =
      sallyArmchair01().buildGraphql<TProductVariantDraft>();
    expect(sallyArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Comes with matching throw pillow","en-US":"- Comes with matching throw pillow","de-DE":"- Wird mit passendem Dekokissen geliefert"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Pink:#FFC0CB","de-DE":"Rosa:#FFC0CB","en-US":"Pink:#FFC0CB"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Beige:#F5F5DC","en-US":"Beige:#F5F5DC","de-DE":"Beige:#F5F5DC"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sally_Armchair-1.1.jpeg",
          },
        ],
        "key": "sallyArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "19900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
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
            "key": "19900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
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
            "key": "19900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 19900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SARMO-034",
      }
    `);
  });
});
