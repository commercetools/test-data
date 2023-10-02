import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import traditionalArmchair01 from './traditional-armchair-01';

describe(`with traditionalArmchair01 preset`, () => {
  it(`should return a traditionalArmchair01 preset`, () => {
    const traditionalArmchair01Preset =
      traditionalArmchair01().build<TProductVariantDraft>();
    expect(traditionalArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Baumwollpolsterung",
              "en-GB": "- Cotton upholstery",
              "en-US": "- Cotton upholstery",
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
          {
            "name": "color",
            "value": {
              "de-DE": "#D0C1B0",
              "en-GB": "#D0C1B0",
              "en-US": "#D0C1B0",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Eierschale",
              "en-GB": "Eggshell",
              "en-US": "Eggshell",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg",
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
              "centAmount": 29900,
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
              "centAmount": 29900,
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
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TARM-034",
      }
    `);
  });

  it(`should return a traditionalArmchair01 preset when built for graphql`, () => {
    const traditionalArmchair01PresetGraphql =
      traditionalArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(traditionalArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Cotton upholstery","en-US":"- Cotton upholstery","de-DE":"- Baumwollpolsterung"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#D0C1B0","de-DE":"#D0C1B0","en-US":"#D0C1B0"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Eggshell","de-DE":"Eierschale","en-US":"Eggshell"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg",
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
                "centAmount": 29900,
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
                "centAmount": 29900,
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
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "TARM-034",
      }
    `);
  });
});
