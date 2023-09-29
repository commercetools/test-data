import type { TProductVariantDraft } from '../../../types';
import iceBucket01 from './ice-bucket-01';

describe(`with iceBucket01 preset`, () => {
  it(`should return a iceBucket01 preset`, () => {
    const iceBucket01Preset = iceBucket01().build<TProductVariantDraft>();
    expect(iceBucket01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl
      - Spülmaschinenfest",
              "en-GB": "- Stainless steel
      - Dishwasher safe",
              "en-US": "- Stainless steel
      - Dishwasher safe",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4992,
              "w": 5072,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_429585249-GI0q3D7S.jpeg",
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
              "centAmount": 499,
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
              "centAmount": 499,
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
              "centAmount": 499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BUCK-023",
      }
    `);
  });

  it(`should return a iceBucket01 preset when built for graphql`, () => {
    const iceBucket01PresetGraphql =
      iceBucket01().buildGraphql<TProductVariantDraft>();
    expect(iceBucket01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel\\n- Dishwasher safe","de-DE":"- Edelstahl\\n- Spülmaschinenfest","en-US":"- Stainless steel\\n- Dishwasher safe"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4992,
              "width": 5072,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_429585249-GI0q3D7S.jpeg",
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
                "centAmount": 499,
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
                "centAmount": 499,
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
                "centAmount": 499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BUCK-023",
      }
    `);
  });
});
