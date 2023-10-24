import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernGoldCoffeeTable01 from './modern-gold-coffee-table-01';

describe(`with modernGoldCoffeeTable01 preset`, () => {
  it(`should return a modernGoldCoffeeTable01 preset`, () => {
    const modernGoldCoffeeTable01Preset =
      modernGoldCoffeeTable01().build<TProductVariantDraft>();
    expect(modernGoldCoffeeTable01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "white",
              "en-GB": "white",
              "en-US": "white",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "White",
              "en-GB": "White",
              "en-US": "White",
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
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
              "en-GB": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
              "en-US": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.4.jpeg",
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
              "centAmount": 25999,
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
              "centAmount": 25999,
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
              "centAmount": 25999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GMCT-01",
      }
    `);
  });

  it(`should return a modernGoldCoffeeTable01 preset when built for graphql`, () => {
    const modernGoldCoffeeTable01PresetGraphql =
      modernGoldCoffeeTable01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernGoldCoffeeTable01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"white","en-GB":"white","de-DE":"white"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"White","en-GB":"White","de-DE":"White"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"gold","en-GB":"gold","de-DE":"gold"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled","en-GB":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled","de-DE":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.4.jpeg",
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
                "centAmount": 25999,
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
                "centAmount": 25999,
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
                "centAmount": 25999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GMCT-01",
      }
    `);
  });
});
