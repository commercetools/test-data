import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug01 from './meadow-rug-01';

describe(`with meadowRug01 preset`, () => {
  it(`should return a meadowRug01 preset`, () => {
    const meadowRug01Preset = meadowRug01().build<TProductVariantDraft>();
    expect(meadowRug01Preset).toMatchInlineSnapshot(`
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
              "de-DE": "#b3b1ab",
              "en-GB": "#b3b1ab",
              "en-US": "#b3b1ab",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Gray",
              "en-US": "Gray",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458764-r6hlYeat.jpeg",
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
        "sku": "MR-03",
      }
    `);
  });

  it(`should return a meadowRug01 preset when built for graphql`, () => {
    const meadowRug01PresetGraphql =
      meadowRug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#b3b1ab","de-DE":"#b3b1ab","en-US":"#b3b1ab"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 4500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458764-r6hlYeat.jpeg",
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
        "sku": "MR-03",
      }
    `);
  });
});
