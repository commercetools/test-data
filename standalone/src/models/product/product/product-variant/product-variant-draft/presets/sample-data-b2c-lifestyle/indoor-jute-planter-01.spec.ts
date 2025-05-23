import type { TProductVariantDraft } from '../../../types';
import indoorJutePlanter01 from './indoor-jute-planter-01';

describe(`with indoorJutePlanter01 preset`, () => {
  it(`should return a indoorJutePlanter01 preset`, () => {
    const indoorJutePlanter01Preset =
      indoorJutePlanter01().build<TProductVariantDraft>();
    expect(indoorJutePlanter01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Pflanze nicht im Lieferumfang enthalten",
              "en-GB": "- Plant not included",
              "en-US": "- Plant not included",
            },
          },
          {
            "name": "size",
            "value": {
              "en-GB": "Large",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-1.1.jpeg",
          },
        ],
        "key": "indoorJutePlanter01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 3299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "IJP-03",
      }
    `);
  });

  it(`should return a indoorJutePlanter01 preset when built for graphql`, () => {
    const indoorJutePlanter01PresetGraphql =
      indoorJutePlanter01().buildGraphql<TProductVariantDraft>();
    expect(indoorJutePlanter01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Plant not included","en-US":"- Plant not included","de-DE":"- Pflanze nicht im Lieferumfang enthalten"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"Large"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-1.1.jpeg",
          },
        ],
        "key": "indoorJutePlanter01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
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
            "key": "3299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "IJP-03",
      }
    `);
  });
});
