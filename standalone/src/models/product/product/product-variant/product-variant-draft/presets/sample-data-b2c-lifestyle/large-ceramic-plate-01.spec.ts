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
            "value": "green",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Helles Oliv",
              "en-GB": "Light Olive",
              "en-US": "Light Olive",
            },
          },
          {
            "name": "color-code",
            "value": "#BAB86C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.2.jpeg",
          },
        ],
        "key": "largeCeramicPlate01",
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
            "name": "productspec",
            "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
          },
          {
            "name": "search-color",
            "value": ""green"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Olive","de-DE":"Helles Oliv","en-US":"Light Olive"}",
          },
          {
            "name": "color-code",
            "value": ""#BAB86C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2700,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.2.jpeg",
          },
        ],
        "key": "largeCeramicPlate01",
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
        "sku": "LCP-01",
      }
    `);
  });
});
