import type { TProductVariantDraft } from '../../../types';
import slateArmchair01 from './slate-armchair-01';

describe(`with slateArmchair01 preset`, () => {
  it(`should return a slateArmchair01 preset`, () => {
    const slateArmchair01Preset =
      slateArmchair01().build<TProductVariantDraft>();
    expect(slateArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive Ottomane",
              "en-GB": "- Includes ottoman",
              "en-US": "- Includes ottoman",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#989898",
              "en-GB": "#989898",
              "en-US": "#989898",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Schiefer",
              "en-GB": "Slate",
              "en-US": "Slate",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4004,
              "w": 5009,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg",
          },
          {
            "dimensions": {
              "h": 3498,
              "w": 5544,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg",
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
        "sku": "SARM-09",
      }
    `);
  });

  it(`should return a slateArmchair01 preset when built for graphql`, () => {
    const slateArmchair01PresetGraphql =
      slateArmchair01().buildGraphql<TProductVariantDraft>();
    expect(slateArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes ottoman","en-US":"- Includes ottoman","de-DE":"- Inklusive Ottomane"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#989898","de-DE":"#989898","en-US":"#989898"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Slate","de-DE":"Schiefer","en-US":"Slate"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4004,
              "width": 5009,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg",
          },
          {
            "dimensions": {
              "height": 3498,
              "width": 5544,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg",
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
        "sku": "SARM-09",
      }
    `);
  });
});
