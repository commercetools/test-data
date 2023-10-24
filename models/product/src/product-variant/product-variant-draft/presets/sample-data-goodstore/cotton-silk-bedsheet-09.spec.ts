import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet09 from './cotton-silk-bedsheet-09';

describe(`with cottonSilkBedsheet09 preset`, () => {
  it(`should return a cottonSilkBedsheet09 preset`, () => {
    const cottonSilkBedsheet09Preset =
      cottonSilkBedsheet09().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet09Preset).toMatchInlineSnapshot(`
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
            "name": "color",
            "value": {
              "de-DE": "#bcbcbc",
              "en-GB": "#bcbcbc",
              "en-US": "#bcbcbc",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Gray",
              "en-US": "Gray",
            },
          },
          {
            "name": "size",
            "value": {
              "en-GB": "King",
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3848,
              "w": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-9.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CSKG-2345",
      }
    `);
  });

  it(`should return a cottonSilkBedsheet09 preset when built for graphql`, () => {
    const cottonSilkBedsheet09PresetGraphql =
      cottonSilkBedsheet09().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet09PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","en-US":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","de-DE":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#bcbcbc","de-DE":"#bcbcbc","en-US":"#bcbcbc"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"King"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3848,
              "width": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-9.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
        "sku": "CSKG-2345",
      }
    `);
  });
});
