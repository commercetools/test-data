import type { TProductVariantDraft } from '../../../types';
import sandTeaCup01 from './sand-tea-cup-01';

describe(`with sandTeaCup01 preset`, () => {
  it(`should return a sandTeaCup01 preset`, () => {
    const sandTeaCup01Preset = sandTeaCup01().build<TProductVariantDraft>();
    expect(sandTeaCup01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tasse",
              "en-GB": "- Includes 1 mug",
              "en-US": "- Includes 1 mug",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Sand",
              "en-GB": "Sand",
              "en-US": "Sand",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFDC94",
              "en-GB": "#FFDC94",
              "en-US": "#FFDC94",
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
              "h": 4020,
              "w": 6046,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sand%20Tea%20Cup-yM4SUI5o.jpeg",
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
              "centAmount": 299,
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
              "centAmount": 299,
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
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "STM-09",
      }
    `);
  });

  it(`should return a sandTeaCup01 preset when built for graphql`, () => {
    const sandTeaCup01PresetGraphql =
      sandTeaCup01().buildGraphql<TProductVariantDraft>();
    expect(sandTeaCup01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 mug","en-US":"- Includes 1 mug","de-DE":"- Enthält 1 Tasse"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Sand","de-DE":"Sand","en-US":"Sand"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#FFDC94","de-DE":"#FFDC94","en-US":"#FFDC94"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4020,
              "width": 6046,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sand%20Tea%20Cup-yM4SUI5o.jpeg",
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
                "centAmount": 299,
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
                "centAmount": 299,
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
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "STM-09",
      }
    `);
  });
});
