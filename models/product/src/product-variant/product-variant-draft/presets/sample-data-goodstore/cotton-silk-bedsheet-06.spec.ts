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
            "name": "color",
            "value": {
              "de-DE": "#ffc0cb",
              "en-GB": "#ffc0cb",
              "en-US": "#ffc0cb",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Lachs",
              "en-GB": "Salmon",
              "en-US": "Salmon",
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
              "key": "#FFC0CB",
              "label": {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3627,
              "w": 5589,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-bUbU_TKg.jpeg",
          },
          {
            "dimensions": {
              "h": 3228,
              "w": 5216,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-I0XNqDPK.jpeg",
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
            "name": "color",
            "value": "{"en-GB":"#ffc0cb","de-DE":"#ffc0cb","en-US":"#ffc0cb"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Salmon","de-DE":"Lachs","en-US":"Salmon"}",
          },
          {
            "name": "size",
            "value": "{"en-GB":"King"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3627,
              "width": 5589,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-bUbU_TKg.jpeg",
          },
          {
            "dimensions": {
              "height": 3228,
              "width": 5216,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-I0XNqDPK.jpeg",
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
        "sku": "CSKP-083",
      }
    `);
  });
});