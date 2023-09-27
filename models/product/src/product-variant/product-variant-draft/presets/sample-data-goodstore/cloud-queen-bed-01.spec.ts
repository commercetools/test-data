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
            "name": "colorlabel",
            "value": {
              "de-DE": "Hellblau",
              "en-GB": "Light Blue",
              "en-US": "Light Blue",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#D4EEF2",
              "en-GB": "#D4EEF2",
              "en-US": "#D4EEF2",
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
          {
            "name": "color-filter",
            "value": {
              "key": "#0000FF",
              "label": {
                "de-DE": "Blau",
                "en-GB": "Blue",
                "en-US": "Blue",
              },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg",
          },
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "colorlabel",
            "value": "{"en-GB":"Light Blue","de-DE":"Hellblau","en-US":"Light Blue"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#D4EEF2","de-DE":"#D4EEF2","en-US":"#D4EEF2"}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly is included","de-DE":"- Die Montage ist im Preis inbegriffen","en-US":"- Assembly is included"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg",
          },
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
