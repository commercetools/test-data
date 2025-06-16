import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet08 from './cotton-silk-bedsheet-08';

describe(`with cottonSilkBedsheet08 preset`, () => {
  it(`should return a cottonSilkBedsheet08 preset`, () => {
    const cottonSilkBedsheet08Preset =
      cottonSilkBedsheet08().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet08Preset).toMatchInlineSnapshot(`
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
            "value": [
              {
                "de-DE": "Grau",
                "en-GB": "Grey",
                "en-US": "Gray",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Hell grau",
              "en-GB": "Light Grey",
              "en-US": "Light Gray",
            },
          },
          {
            "name": "color-code",
            "value": "#D3D3D3",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3848,
              "w": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-8.1.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet08",
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
        "sku": "CSKG-023",
      }
    `);
  });

  it(`should return a cottonSilkBedsheet08 preset when built for graphql`, () => {
    const cottonSilkBedsheet08PresetGraphql =
      cottonSilkBedsheet08().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet08PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Grey","de-DE":"Hell grau","en-US":"Light Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#D3D3D3"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3848,
              "width": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-8.1.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet08",
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
        "sku": "CSKG-023",
      }
    `);
  });
});
