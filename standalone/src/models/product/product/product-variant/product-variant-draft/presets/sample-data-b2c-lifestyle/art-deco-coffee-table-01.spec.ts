import type { TProductVariantDraft } from '../../../types';
import artDecoCoffeeTable01 from './art-deco-coffee-table-01';

describe(`with artDecoCoffeeTable01 preset`, () => {
  it(`should return a artDecoCoffeeTable01 preset`, () => {
    const artDecoCoffeeTable01Preset =
      artDecoCoffeeTable01().build<TProductVariantDraft>();
    expect(artDecoCoffeeTable01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
              "en-GB": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
              "en-US": "- Granite top
      - 5ft by 3ft by 2ft
      - Preassembled",
            },
          },
          {
            "name": "search-color",
            "value": "black",
          },
          {
            "name": "search-finish",
            "value": "gold",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "color-code",
            "value": "#000000",
          },
          {
            "name": "finish-code",
            "value": "#FFD700",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.2.jpeg",
          },
        ],
        "key": "artDecoCoffeeTable01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "320000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 320000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "320000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 320000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "320000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 320000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ADCT-01",
      }
    `);
  });

  it(`should return a artDecoCoffeeTable01 preset when built for graphql`, () => {
    const artDecoCoffeeTable01PresetGraphql =
      artDecoCoffeeTable01().buildGraphql<TProductVariantDraft>();
    expect(artDecoCoffeeTable01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","en-GB":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled","de-DE":"- Granite top\\n- 5ft by 3ft by 2ft\\n- Preassembled"}",
          },
          {
            "name": "search-color",
            "value": ""black"",
          },
          {
            "name": "search-finish",
            "value": ""gold"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-code",
            "value": ""#000000"",
          },
          {
            "name": "finish-code",
            "value": ""#FFD700"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.2.jpeg",
          },
        ],
        "key": "artDecoCoffeeTable01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "320000EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 320000,
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
            "key": "320000GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 320000,
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
            "key": "320000USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 320000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ADCT-01",
      }
    `);
  });
});
