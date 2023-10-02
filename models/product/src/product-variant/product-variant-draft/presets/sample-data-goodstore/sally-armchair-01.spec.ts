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
            "name": "colorlabel",
            "value": {
              "de-DE": "Baby Pink",
              "en-GB": "Baby Pink",
              "en-US": "Baby Pink",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFE0E0",
              "en-GB": "#FFE0E0",
              "en-US": "#FFE0E0",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Zeder",
              "en-GB": "Cedar",
              "en-US": "Cedar",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#FAE7C6",
              "en-GB": "#FAE7C6",
              "en-US": "#FAE7C6",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFC0CB",
              "label": {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_434126551-_8wicI2h.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "colorlabel",
            "value": "{"en-GB":"Baby Pink","de-DE":"Baby Pink","en-US":"Baby Pink"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#FFE0E0","de-DE":"#FFE0E0","en-US":"#FFE0E0"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#FAE7C6","en-US":"#FAE7C6","de-DE":"#FAE7C6"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_434126551-_8wicI2h.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
