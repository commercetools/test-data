import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet04 from './cotton-silk-bedsheet-04';

describe(`with cottonSilkBedsheet04 preset`, () => {
  it(`should return a cottonSilkBedsheet04 preset`, () => {
    const cottonSilkBedsheet04Preset =
      cottonSilkBedsheet04().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet04Preset).toMatchInlineSnapshot(`
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
              "en-GB": "Twin",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3228,
              "w": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet04",
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
        ],
        "sku": "CSKP-0934",
      }
    `);
  });

  it(`should return a cottonSilkBedsheet04 preset when built for graphql`, () => {
    const cottonSilkBedsheet04PresetGraphql =
      cottonSilkBedsheet04().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet04PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","en-US":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","de-DE":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"Twin"}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3228,
              "width": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-4.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet04",
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
        ],
        "sku": "CSKP-0934",
      }
    `);
  });
});
