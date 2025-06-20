import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet05 from './cotton-silk-bedsheet-05';

describe(`with cottonSilkBedsheet05 preset`, () => {
  it(`should return a cottonSilkBedsheet05 preset`, () => {
    const cottonSilkBedsheet05Preset =
      cottonSilkBedsheet05().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet05Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
              "en-GB": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
              "en-US": "- Machine washable
      - 600 thread count
      - Includes 1 fitted sheet",
            },
          },
          {
            "name": "size",
            "value": {
              "en-GB": "Queen",
            },
          },
          {
            "name": "search-color",
            "value": "pink",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Hell rosa",
              "en-GB": "Light Pink",
              "en-US": "Light Pink",
            },
          },
          {
            "name": "color-code",
            "value": "#FFB6C1",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3627,
              "w": 5589,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3228,
              "w": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet05",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CSKP-0932",
      }
    `);
  });

  it(`should return a cottonSilkBedsheet05 preset when built for graphql`, () => {
    const cottonSilkBedsheet05PresetGraphql =
      cottonSilkBedsheet05().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet05PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","en-US":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","de-DE":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"Queen"}",
          },
          {
            "name": "search-color",
            "value": ""pink"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Pink","de-DE":"Hell rosa","en-US":"Light Pink"}",
          },
          {
            "name": "color-code",
            "value": ""#FFB6C1"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3627,
              "width": 5589,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3228,
              "width": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet05",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1599EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
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
            "key": "1599GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
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
            "key": "1599USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CSKP-0932",
      }
    `);
  });
});
