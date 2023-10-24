import type { TProductVariantDraft } from '../../../types';
import largeCeramicPlate01 from './large-ceramic-plate-01';

describe(`with largeCeramicPlate01 preset`, () => {
  it(`should return a largeCeramicPlate01 preset`, () => {
    const largeCeramicPlate01Preset =
      largeCeramicPlate01().build<TProductVariantDraft>();
    expect(largeCeramicPlate01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#d8deb1",
              "en-GB": "#d8deb1",
              "en-US": "#d8deb1",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Light Olive ",
              "en-GB": "Light Olive ",
              "en-US": "Light Olive ",
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
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-1.2.jpeg",
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
        "sku": "LCP-01",
      }
    `);
  });

  it(`should return a largeCeramicPlate01 preset when built for graphql`, () => {
    const largeCeramicPlate01PresetGraphql =
      largeCeramicPlate01().buildGraphql<TProductVariantDraft>();
    expect(largeCeramicPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"#d8deb1","en-GB":"#d8deb1","de-DE":"#d8deb1"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Light Olive ","en-GB":"Light Olive ","de-DE":"Light Olive "}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-1.2.jpeg",
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
        "sku": "LCP-01",
      }
    `);
  });
});
