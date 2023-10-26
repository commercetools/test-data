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
            "name": "color",
            "value": {
              "de-DE": "black",
              "en-GB": "black",
              "en-US": "black",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Black",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "gold",
              "en-GB": "gold",
              "en-US": "gold",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Brass",
              "en-GB": "Brass",
              "en-US": "Brass",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Art_Deco_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Art_Deco_Coffee_Table-1.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "color",
            "value": "{"en-US":"black","en-GB":"black","de-DE":"black"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Black","en-GB":"Black","de-DE":"Black"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"gold","en-GB":"gold","de-DE":"gold"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Brass","en-GB":"Brass","de-DE":"Brass"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Art_Deco_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Art_Deco_Coffee_Table-1.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
