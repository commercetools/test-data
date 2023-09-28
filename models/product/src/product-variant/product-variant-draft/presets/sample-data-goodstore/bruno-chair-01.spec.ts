import type { TProductVariantDraft } from '../../../types';
import brunoChair from './bruno-chair-01';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductVariantDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Stuhl",
              "en-GB": "- Includes 1 chair",
              "en-US": "- Includes 1 chair",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#B29880",
              "en-GB": "#B29880",
              "en-US": "#B29880",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Birke",
              "en-GB": "Birch",
              "en-US": "Birch",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#FFC28D",
              "en-GB": "#FFC28D",
              "en-US": "#FFC28D",
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
              "h": 4315,
              "w": 6473,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Bruno%20Chair-I8CgximE.jpeg",
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
              "centAmount": 7999,
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
              "centAmount": 7999,
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
              "centAmount": 7999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BARM-03",
      }
    `);
  });

  it(`should return a brunoChair preset when built for graphql`, () => {
    const brunoChairPresetGraphql =
      brunoChair().buildGraphql<TProductVariantDraft>();
    expect(brunoChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#B29880","de-DE":"#B29880","en-US":"#B29880"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Birch","de-DE":"Birke","en-US":"Birch"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#FFC28D","de-DE":"#FFC28D","en-US":"#FFC28D"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4315,
              "width": 6473,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Bruno%20Chair-I8CgximE.jpeg",
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
                "centAmount": 7999,
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
                "centAmount": 7999,
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
                "centAmount": 7999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BARM-03",
      }
    `);
  });
});
