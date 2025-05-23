import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cubeJuteBasket01 from './cube-jute-basket-01';

describe(`with cubeJuteBasket01 preset`, () => {
  it(`should return a cubeJuteBasket01 preset`, () => {
    const cubeJuteBasket01Preset =
      cubeJuteBasket01().build<TProductVariantDraft>();
    expect(cubeJuteBasket01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Jute
      - Vormontiert
      - 1 Fuß x 1 Fuß x 1 Fuß",
              "en-GB": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
              "en-US": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Bräunen:#D2B48C",
              "en-GB": "Tan:#D2B48C",
              "en-US": "Tan:#D2B48C",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3564,
              "w": 4684,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cube_Jute_Basket-1.1.jpeg",
          },
        ],
        "key": "cubeJuteBasket01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "USD",
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1199USD_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1199,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CJB-01",
      }
    `);
  });

  it(`should return a cubeJuteBasket01 preset when built for graphql`, () => {
    const cubeJuteBasket01PresetGraphql =
      cubeJuteBasket01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cubeJuteBasket01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Jute\\n- Preassembled\\n- 1ft x 1ft x 1ft","de-DE":"- Jute\\n- Vormontiert\\n- 1 Fuß x 1 Fuß x 1 Fuß","en-US":"- Jute\\n- Preassembled\\n- 1ft x 1ft x 1ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3564,
              "width": 4684,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cube_Jute_Basket-1.1.jpeg",
          },
        ],
        "key": "cubeJuteBasket01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
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
            "key": "1299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
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
            "key": "1299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
                "currencyCode": "USD",
              },
            },
          },
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1199USD_dist",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1199,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CJB-01",
      }
    `);
  });
});
