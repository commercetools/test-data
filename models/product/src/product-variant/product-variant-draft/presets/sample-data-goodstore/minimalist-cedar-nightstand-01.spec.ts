import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistCedarNightstand01 from './minimalist-cedar-nightstand-01';

describe(`with minimalistCedarNightstand01 preset`, () => {
  it(`should return a minimalistCedarNightstand01 preset`, () => {
    const minimalistCedarNightstand01Preset =
      minimalistCedarNightstand01().build<TProductVariantDraft>();
    expect(minimalistCedarNightstand01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Zeder",
              "en-GB": "Cedar",
              "en-US": "Cedar",
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
          {
            "name": "finish",
            "value": {
              "de-DE": "#8C9585",
              "en-GB": "#8C9585",
              "en-US": "#8C9585",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.3.jpeg",
          },
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 6016,
              "w": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.2.jpeg",
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
              "centAmount": 7900,
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
              "centAmount": 7900,
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
              "centAmount": 7900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CNS-0434",
      }
    `);
  });

  it(`should return a minimalistCedarNightstand01 preset when built for graphql`, () => {
    const minimalistCedarNightstand01PresetGraphql =
      minimalistCedarNightstand01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistCedarNightstand01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#8C9585","de-DE":"#8C9585","en-US":"#8C9585"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.3.jpeg",
          },
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 6016,
              "width": 4011,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Cedar_Nightstand-1.2.jpeg",
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
                "centAmount": 7900,
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
                "centAmount": 7900,
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
                "centAmount": 7900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CNS-0434",
      }
    `);
  });
});
