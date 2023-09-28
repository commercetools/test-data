import type { TProductVariantDraft } from '../../../types';
import goldRimmedChampagneGlasses01 from './gold-rimmed-champagne-glasses-01';

describe(`with goldRimmedChampagneGlasses01 preset`, () => {
  it(`should return a goldRimmedChampagneGlasses01 preset`, () => {
    const goldRimmedChampagneGlasses01Preset =
      goldRimmedChampagneGlasses01().build<TProductVariantDraft>();
    expect(goldRimmedChampagneGlasses01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Set mit 5 Gläsern
      - Importierter Kristall
      - Goldpolitur an den Felgen",
              "en-GB": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
              "en-US": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3288,
              "w": 2192,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_324635452-3Zz1APY0.jpeg",
          },
          {
            "dimensions": {
              "h": 4113,
              "w": 5143,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_344282685-gcyWcmSc.jpeg",
          },
          {
            "dimensions": {
              "h": 3435,
              "w": 6869,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_345693811-G_NTG3Ju.jpeg",
          },
          {
            "dimensions": {
              "h": 5077,
              "w": 8080,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_347188911-EjT8SgdN.jpeg",
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
              "centAmount": 3000,
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
              "centAmount": 3000,
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
              "centAmount": 3000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GRCG-01",
      }
    `);
  });

  it(`should return a goldRimmedChampagneGlasses01 preset when built for graphql`, () => {
    const goldRimmedChampagneGlasses01PresetGraphql =
      goldRimmedChampagneGlasses01().buildGraphql<TProductVariantDraft>();
    expect(goldRimmedChampagneGlasses01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims","de-DE":"- Set mit 5 Gläsern\\n- Importierter Kristall\\n- Goldpolitur an den Felgen","en-US":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3288,
              "width": 2192,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_324635452-3Zz1APY0.jpeg",
          },
          {
            "dimensions": {
              "height": 4113,
              "width": 5143,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_344282685-gcyWcmSc.jpeg",
          },
          {
            "dimensions": {
              "height": 3435,
              "width": 6869,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_345693811-G_NTG3Ju.jpeg",
          },
          {
            "dimensions": {
              "height": 5077,
              "width": 8080,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_347188911-EjT8SgdN.jpeg",
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
                "centAmount": 3000,
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
                "centAmount": 3000,
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
                "centAmount": 3000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GRCG-01",
      }
    `);
  });
});
