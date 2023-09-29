import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import walnutCounterStool01 from './walnut-counter-stool-01';

describe(`with walnutCounterStool01 preset`, () => {
  it(`should return a walnutCounterStool01 preset`, () => {
    const walnutCounterStool01Preset =
      walnutCounterStool01().build<TProductVariantDraft>();
    expect(walnutCounterStool01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Hocker",
              "en-GB": "- Includes 1 stool",
              "en-US": "- Includes 1 stool",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#964B00",
              "label": {
                "de-DE": "Dunkelbraun",
                "en-GB": "Dark Brown",
                "en-US": "Dark Brown",
              },
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Nussbaum",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#75412E",
              "en-GB": "#75412E",
              "en-US": "#75412E",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5906,
              "w": 5906,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Walnut%20Counter%20Stool-z5z1HoAa.jpeg",
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
              "centAmount": 8999,
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
              "centAmount": 8999,
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
              "centAmount": 8999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "WCSI-09",
      }
    `);
  });

  it(`should return a walnutCounterStool01 preset when built for graphql`, () => {
    const walnutCounterStool01PresetGraphql =
      walnutCounterStool01().buildGraphql<TProductVariantDraftGraphql>();
    expect(walnutCounterStool01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 stool","en-US":"- Includes 1 stool","de-DE":"- Beinhaltet 1 Hocker"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Walnut","de-DE":"Nussbaum","en-US":"Walnut"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#75412E","en-US":"#75412E","de-DE":"#75412E"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5906,
              "width": 5906,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Walnut%20Counter%20Stool-z5z1HoAa.jpeg",
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
                "centAmount": 8999,
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
                "centAmount": 8999,
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
                "centAmount": 8999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "WCSI-09",
      }
    `);
  });
});
