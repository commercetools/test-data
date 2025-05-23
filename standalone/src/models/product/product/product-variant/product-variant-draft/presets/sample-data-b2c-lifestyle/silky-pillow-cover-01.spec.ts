import type { TProductVariantDraft } from '../../../types';
import silkyPillowCover01 from './silky-pillow-cover-01';

describe(`with silkyPillowCover01 preset`, () => {
  it(`should return a silkyPillowCover01 preset`, () => {
    const silkyPillowCover01Preset =
      silkyPillowCover01().build<TProductVariantDraft>();
    expect(silkyPillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Pillow not included",
              "en-US": "- Pillow not included",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Silber:#C0C0C0",
              "en-GB": "Silver:#C0C0C0",
              "en-US": "Silver:#C0C0C0",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4011,
              "w": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Silky_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "silkyPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SPC-06",
      }
    `);
  });

  it(`should return a silkyPillowCover01 preset when built for graphql`, () => {
    const silkyPillowCover01PresetGraphql =
      silkyPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(silkyPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Pillow not included","en-US":"- Pillow not included","de-DE":"- Kissen nicht im Lieferumfang enthalten"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0","en-US":"Silver:#C0C0C0"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4011,
              "width": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Silky_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "silkyPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SPC-06",
      }
    `);
  });
});
