import type { TProductVariantDraft } from '../../../types';
import maternityTopVariant02 from './maternity-top-variant-02';

describe(`with maternityTopVariant02 preset`, () => {
  it(`should return a maternityTopVariant02 preset`, () => {
    const maternityTopVariant02Preset =
      maternityTopVariant02().build<TProductVariantDraft>();
    expect(maternityTopVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Medium",
              "label": "Medium",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Green",
              "label": "Green",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 300,
              "w": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
          },
        ],
        "key": "118717",
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
              "centAmount": 2695,
              "currencyCode": "EUR",
            },
          },
        ],
        "sku": "118717",
      }
    `);
  });

  it(`should return a maternityTopVariant02 preset when built for graphql`, () => {
    const maternityTopVariant02PresetGraphql =
      maternityTopVariant02().buildGraphql<TProductVariantDraft>();
    expect(maternityTopVariant02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": "{"key":"Medium","label":"Medium"}",
          },
          {
            "name": "color",
            "value": "{"key":"Green","label":"Green"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 300,
              "width": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
          },
        ],
        "key": "118717",
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
                "centAmount": 2695,
                "currencyCode": "EUR",
              },
            },
          },
        ],
        "sku": "118717",
      }
    `);
  });
});
