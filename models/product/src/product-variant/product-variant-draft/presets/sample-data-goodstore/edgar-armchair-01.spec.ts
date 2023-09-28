import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import edgarArmchair01 from './edgar-armchair-01';

describe(`with edgarArmchair01 preset`, () => {
  it(`should return a edgarArmchair01 preset`, () => {
    const edgarArmchair01Preset =
      edgarArmchair01().build<TProductVariantDraft>();
    expect(edgarArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage bei Lieferung",
              "en-GB": "- Assembly on delivery",
              "en-US": "- Assembly on delivery",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Leichter Salbei",
              "en-GB": "Light Sage",
              "en-US": "Light Sage",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#B6C9B6",
              "en-GB": "#B6C9B6",
              "en-US": "#B6C9B6",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Eisen",
              "en-GB": "Iron",
              "en-US": "Iron",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#00FF00",
              "label": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_438943116-tYXWisJi.jpeg",
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
              "centAmount": 129900,
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
              "centAmount": 129900,
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
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "EARM-04",
      }
    `);
  });

  it(`should return a edgarArmchair01 preset when built for graphql`, () => {
    const edgarArmchair01PresetGraphql =
      edgarArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(edgarArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Light Sage","de-DE":"Leichter Salbei","en-US":"Light Sage"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#B6C9B6","de-DE":"#B6C9B6","en-US":"#B6C9B6"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Iron","de-DE":"Eisen","en-US":"Iron"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#000","de-DE":"#000","en-US":"#000"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_438943116-tYXWisJi.jpeg",
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
                "centAmount": 129900,
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
                "centAmount": 129900,
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
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "EARM-04",
      }
    `);
  });
});
