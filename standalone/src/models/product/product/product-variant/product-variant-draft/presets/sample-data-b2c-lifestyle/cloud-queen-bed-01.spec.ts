import type { TProductVariantDraft } from '../../../types';
import cloudQueenBed01 from './cloud-queen-bed-01';

describe(`with cloudQueenBed01 preset`, () => {
  it(`should return a cloudQueenBed01 preset`, () => {
    const cloudQueenBed01Preset =
      cloudQueenBed01().build<TProductVariantDraft>();
    expect(cloudQueenBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "Hell blau:#ADD8E6",
              "en-GB": "Light Blue:#ADD8E6",
              "en-US": "Light Blue:#ADD8E6",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Die Montage ist im Preis inbegriffen",
              "en-GB": "- Assembly is included",
              "en-US": "- Assembly is included",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.2.jpeg",
          },
        ],
        "key": "cloudQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 45999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CQB-09",
      }
    `);
  });

  it(`should return a cloudQueenBed01 preset when built for graphql`, () => {
    const cloudQueenBed01PresetGraphql =
      cloudQueenBed01().buildGraphql<TProductVariantDraft>();
    expect(cloudQueenBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-GB":"Light Blue:#ADD8E6","de-DE":"Hell blau:#ADD8E6","en-US":"Light Blue:#ADD8E6"}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly is included","de-DE":"- Die Montage ist im Preis inbegriffen","en-US":"- Assembly is included"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.2.jpeg",
          },
        ],
        "key": "cloudQueenBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "45999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45999,
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
            "key": "45999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45999,
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
            "key": "45999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 45999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CQB-09",
      }
    `);
  });
});
