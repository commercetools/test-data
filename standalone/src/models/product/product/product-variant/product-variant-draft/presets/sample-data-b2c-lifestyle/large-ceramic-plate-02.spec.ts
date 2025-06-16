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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Grau",
                "en-GB": "Grey",
                "en-US": "Gray",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Hell grau",
              "en-GB": "Light Grey",
              "en-US": "Light Gray",
            },
          },
          {
            "name": "color-code",
            "value": "#D3D3D3",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.2.jpeg",
          },
        ],
        "key": "largeCeramicPlate02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
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
            "key": "399GBP",
            "recurrencePolicy": undefined,
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
            "key": "399USD",
            "recurrencePolicy": undefined,
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
            "name": "productspec",
            "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Grey","de-DE":"Hell grau","en-US":"Light Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#D3D3D3"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.2.jpeg",
          },
        ],
        "key": "largeCeramicPlate02",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
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
            "key": "399GBP",
            "recurrencePolicy": undefined,
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
            "key": "399USD",
            "recurrencePolicy": undefined,
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
