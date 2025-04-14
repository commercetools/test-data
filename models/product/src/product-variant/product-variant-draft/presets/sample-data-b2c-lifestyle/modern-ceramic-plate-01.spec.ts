import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernCeramicPlate01 from './modern-ceramic-plate-01';

describe(`with modernCeramicPlate01 preset`, () => {
  it(`should return a modernCeramicPlate01 preset`, () => {
    const modernCeramicPlate01Preset =
      modernCeramicPlate01().build<TProductVariantDraft>();
    expect(modernCeramicPlate01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Teller",
              "en-GB": "- Includes 1 plate",
              "en-US": "- Includes 1 plate",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Weiß:#FFFFFF",
              "en-GB": "White:#FFFFFF",
              "en-US": "White:#FFFFFF",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4576,
              "w": 5088,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Ceramic_Plate-1.1.jpeg",
          },
        ],
        "key": "modernCeramicPlate01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
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
            "key": "299GBP",
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
            "key": "299USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MCP-01",
      }
    `);
  });

  it(`should return a modernCeramicPlate01 preset when built for graphql`, () => {
    const modernCeramicPlate01PresetGraphql =
      modernCeramicPlate01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernCeramicPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4576,
              "width": 5088,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Ceramic_Plate-1.1.jpeg",
          },
        ],
        "key": "modernCeramicPlate01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "299EUR",
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
            "key": "299GBP",
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
            "key": "299USD",
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
        "sku": "MCP-01",
      }
    `);
  });
});
