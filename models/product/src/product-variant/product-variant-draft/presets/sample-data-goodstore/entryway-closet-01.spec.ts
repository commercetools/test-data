import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import entrywayCloset01 from './entryway-closet-01';

describe(`with entrywayCloset01 preset`, () => {
  it(`should return a entrywayCloset01 preset`, () => {
    const entrywayCloset01Preset =
      entrywayCloset01().build<TProductVariantDraft>();
    expect(entrywayCloset01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten",
              "en-GB": "- Assembly included in delivery",
              "en-US": "- Assembly included in delivery",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "weiße Eiche",
              "en-GB": "White Oak",
              "en-US": "White Oak",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#EFDBB4",
              "en-GB": "#EFDBB4",
              "en-US": "#EFDBB4",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4125,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4512,
              "w": 4700,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 4125,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.3.jpeg",
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
              "centAmount": 259900,
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
              "centAmount": 259900,
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
              "centAmount": 259900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "EWC-07",
      }
    `);
  });

  it(`should return a entrywayCloset01 preset when built for graphql`, () => {
    const entrywayCloset01PresetGraphql =
      entrywayCloset01().buildGraphql<TProductVariantDraftGraphql>();
    expect(entrywayCloset01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten","en-US":"- Assembly included in delivery"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"White Oak","de-DE":"weiße Eiche","en-US":"White Oak"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#EFDBB4","de-DE":"#EFDBB4","en-US":"#EFDBB4"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4125,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4512,
              "width": 4700,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 4125,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.3.jpeg",
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
                "centAmount": 259900,
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
                "centAmount": 259900,
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
                "centAmount": 259900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "EWC-07",
      }
    `);
  });
});
