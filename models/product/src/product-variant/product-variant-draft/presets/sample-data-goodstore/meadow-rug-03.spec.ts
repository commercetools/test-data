import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug03 from './meadow-rug-03';

describe(`with meadowRug03 preset`, () => {
  it(`should return a meadowRug03 preset`, () => {
    const meadowRug03Preset = meadowRug03().build<TProductVariantDraft>();
    expect(meadowRug03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 3 Fuß x 5 Fuß",
              "en-GB": "- 3ft x 5ft",
              "en-US": "- 3ft x 5ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#bed1e8",
              "en-GB": "#bed1e8",
              "en-US": "#bed1e8",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Robbin Blue",
              "en-GB": "Robbin Blue",
              "en-US": "Robbin Blue",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#0000FF",
              "label": {
                "de-DE": "Blau",
                "en-GB": "Blue",
                "en-US": "Blue",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269459024-UUE_39RK.jpeg",
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
        "sku": "MR-05",
      }
    `);
  });

  it(`should return a meadowRug03 preset when built for graphql`, () => {
    const meadowRug03PresetGraphql =
      meadowRug03().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#bed1e8","de-DE":"#bed1e8","en-US":"#bed1e8"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Robbin Blue","de-DE":"Robbin Blue","en-US":"Robbin Blue"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269459024-UUE_39RK.jpeg",
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
        "sku": "MR-05",
      }
    `);
  });
});
