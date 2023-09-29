import type { TProductVariantDraft } from '../../../types';
import glamArmchair01 from './glam-armchair-01';

describe(`with glamArmchair01 preset`, () => {
  it(`should return a glamArmchair01 preset`, () => {
    const glamArmchair01Preset = glamArmchair01().build<TProductVariantDraft>();
    expect(glamArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung
      - Kissen inklusive",
              "en-GB": "- Dry clean only
      - Pillow included",
              "en-US": "- Dry clean only
      - Pillow included",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FECB69",
              "en-GB": "#FECB69",
              "en-US": "#FECB69",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFD700",
              "label": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#FFDF7F",
              "en-GB": "#FFDF7F",
              "en-US": "#FFDF7F",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Messing",
              "en-GB": "Brass",
              "en-US": "Brass",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_379387886-WRoNTpOE.jpeg",
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
              "centAmount": 59900,
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
              "centAmount": 59900,
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
              "centAmount": 59900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GARM-093",
      }
    `);
  });

  it(`should return a glamArmchair01 preset when built for graphql`, () => {
    const glamArmchair01PresetGraphql =
      glamArmchair01().buildGraphql<TProductVariantDraft>();
    expect(glamArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only\\n- Pillow included","de-DE":"- Nur chemische Reinigung\\n- Kissen inklusive","en-US":"- Dry clean only\\n- Pillow included"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#FECB69","de-DE":"#FECB69","en-US":"#FECB69"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFD700","label":{"de-DE":"Gold","en-GB":"Gold","en-US":"Gold"}}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#FFDF7F","de-DE":"#FFDF7F","en-US":"#FFDF7F"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Brass","de-DE":"Messing","en-US":"Brass"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_379387886-WRoNTpOE.jpeg",
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
                "centAmount": 59900,
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
                "centAmount": 59900,
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
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GARM-093",
      }
    `);
  });
});
