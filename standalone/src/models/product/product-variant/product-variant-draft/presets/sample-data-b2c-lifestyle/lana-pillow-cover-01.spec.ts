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
            "name": "color",
            "value": {
              "de-DE": "Hell grau:#D3D3D3",
              "en-GB": "Light Grey:#D3D3D3",
              "en-US": "Light Gray:#D3D3D3",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Lana_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "lanaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicyRef": undefined,
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
            "key": "1099GBP",
            "recurrencePolicyRef": undefined,
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
            "key": "1099USD",
            "recurrencePolicyRef": undefined,
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
            "name": "color",
            "value": "{"en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3","en-US":"Light Gray:#D3D3D3"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3143,
              "width": 4350,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Lana_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "lanaPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicyRef": undefined,
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
            "key": "1099GBP",
            "recurrencePolicyRef": undefined,
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
            "key": "1099USD",
            "recurrencePolicyRef": undefined,
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
