import type { TProductVariantDraft } from '../../../types';
import lanaPillowCover01 from './lana-pillow-cover-01';

describe(`with lanaPillowCover01 preset`, () => {
  it(`should return a lanaPillowCover01 preset`, () => {
    const lanaPillowCover01Preset =
      lanaPillowCover01().build<TProductVariantDraft>();
    expect(lanaPillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten
      - Verfügt über ein Reißverschlussgehäuse",
              "en-GB": "- Machine washable
      - Pillow not included
      - Has a zip enclosure",
              "en-US": "- Machine washable
      - Pillow not included
      - Has a zip enclosure",
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
            "name": "color",
            "value": {
              "de-DE": "#ABA9A7",
              "en-GB": "#ABA9A7",
              "en-US": "#ABA9A7",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Federgrau",
              "en-GB": "Feather Gray",
              "en-US": "Feather Gray",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3143,
              "w": 4350,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Lana%20Pillow%20Cover-aVKbCIy1.jpeg",
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
              "centAmount": 1099,
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
              "centAmount": 1099,
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
              "centAmount": 1099,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LPC-09",
      }
    `);
  });

  it(`should return a lanaPillowCover01 preset when built for graphql`, () => {
    const lanaPillowCover01PresetGraphql =
      lanaPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(lanaPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included\\n- Has a zip enclosure","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten\\n- Verfügt über ein Reißverschlussgehäuse","en-US":"- Machine washable\\n- Pillow not included\\n- Has a zip enclosure"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#ABA9A7","de-DE":"#ABA9A7","en-US":"#ABA9A7"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Feather Gray","de-DE":"Federgrau","en-US":"Feather Gray"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3143,
              "width": 4350,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Lana%20Pillow%20Cover-aVKbCIy1.jpeg",
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
                "centAmount": 1099,
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
                "centAmount": 1099,
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
                "centAmount": 1099,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LPC-09",
      }
    `);
  });
});
