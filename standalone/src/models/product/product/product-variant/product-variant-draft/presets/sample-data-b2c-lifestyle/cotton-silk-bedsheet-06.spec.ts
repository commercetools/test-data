import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet06 from './cotton-silk-bedsheet-06';

describe(`with cottonSilkBedsheet06 preset`, () => {
  it(`should return a cottonSilkBedsheet06 preset`, () => {
    const cottonSilkBedsheet06Preset =
      cottonSilkBedsheet06().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet06Preset).toMatchInlineSnapshot(`
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
              "en-GB": "King",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3228,
              "w": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet06",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1899,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1899,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CSKP-083",
      }
    `);
  });

  it(`should return a cottonSilkBedsheet06 preset when built for graphql`, () => {
    const cottonSilkBedsheet06PresetGraphql =
      cottonSilkBedsheet06().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet06PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","en-US":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","de-DE":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"King"}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3228,
              "width": 5216,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.2.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet06",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1899,
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
            "key": "1899GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1899,
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
            "key": "1899USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1899,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CSKP-083",
      }
    `);
  });
});
