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
              "de-DE": "Hell grau:#D3D3D3",
              "en-GB": "Light Grey:#D3D3D3",
              "en-US": "Light Gray:#D3D3D3",
            },
          },
          {
            "name": "size",
            "value": {
              "en-GB": "King",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-9.1.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet09",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899EUR",
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
            "value": "{"en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3","en-US":"Light Gray:#D3D3D3"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"King"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3848,
              "width": 6016,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-9.1.jpeg",
          },
        ],
        "key": "cottonSilkBedsheet09",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1899EUR",
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
