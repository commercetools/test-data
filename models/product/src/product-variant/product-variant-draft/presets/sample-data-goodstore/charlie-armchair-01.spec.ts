import type { TProductVariantDraft } from '../../../types';
import charlieArmchair01 from './charlie-armchair-01';

describe(`with charlieArmchair01 preset`, () => {
  it(`should return a charlieArmchair01 preset`, () => {
    const charlieArmchair01Preset =
      charlieArmchair01().build<TProductVariantDraft>();
    expect(charlieArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung",
              "en-GB": "- Dry clean only",
              "en-US": "- Dry clean only",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Terrakotta",
              "en-GB": "Terracotta",
              "en-US": "Terracotta",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#D57912",
              "en-GB": "#D57912",
              "en-US": "#D57912",
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
              "de-DE": "#ECD0B2",
              "en-GB": "#ECD0B2",
              "en-US": "#ECD0B2",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFA500",
              "label": {
                "de-DE": "Orange",
                "en-GB": "Orange",
                "en-US": "Orange",
              },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_303920112-eT2e5OWo.jpeg",
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
              "centAmount": 49900,
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
              "centAmount": 49900,
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
              "centAmount": 49900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CARM-023",
      }
    `);
  });

  it(`should return a charlieArmchair01 preset when built for graphql`, () => {
    const charlieArmchair01PresetGraphql =
      charlieArmchair01().buildGraphql<TProductVariantDraft>();
    expect(charlieArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Terracotta","de-DE":"Terrakotta","en-US":"Terracotta"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#D57912","de-DE":"#D57912","en-US":"#D57912"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#ECD0B2","de-DE":"#ECD0B2","en-US":"#ECD0B2"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_303920112-eT2e5OWo.jpeg",
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
                "centAmount": 49900,
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
                "centAmount": 49900,
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
                "centAmount": 49900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CARM-023",
      }
    `);
  });
});
