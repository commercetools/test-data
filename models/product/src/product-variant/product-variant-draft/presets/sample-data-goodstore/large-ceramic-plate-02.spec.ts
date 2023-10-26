import type { TProductVariantDraft } from '../../../types';
import largeCeramicPlate02 from './large-ceramic-plate-02';

describe(`with largeCeramicPlate02 preset`, () => {
  it(`should return a largeCeramicPlate02 preset`, () => {
    const largeCeramicPlate02Preset =
      largeCeramicPlate02().build<TProductVariantDraft>();
    expect(largeCeramicPlate02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#ebebeb",
              "en-GB": "#ebebeb",
              "en-US": "#ebebeb",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Light Gray",
              "en-GB": "Light Gray",
              "en-US": "Light Gray",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
              "en-GB": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe
      - Microwave safe",
              "en-US": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
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
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.2.jpeg",
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
              "centAmount": 399,
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
              "centAmount": 399,
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
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LCP-02",
      }
    `);
  });

  it(`should return a largeCeramicPlate02 preset when built for graphql`, () => {
    const largeCeramicPlate02PresetGraphql =
      largeCeramicPlate02().buildGraphql<TProductVariantDraft>();
    expect(largeCeramicPlate02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"#ebebeb","en-GB":"#ebebeb","de-DE":"#ebebeb"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Light Gray","en-GB":"Light Gray","de-DE":"Light Gray"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.2.jpeg",
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
                "centAmount": 399,
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
                "centAmount": 399,
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
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LCP-02",
      }
    `);
  });
});
