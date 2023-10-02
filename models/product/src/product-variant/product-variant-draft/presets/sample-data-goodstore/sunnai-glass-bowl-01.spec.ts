import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import sunnaiGlassBowl01 from './sunnai-glass-bowl-01';

describe(`with sunnaiGlassBowl01 preset`, () => {
  it(`should return a sunnaiGlassBowl01 preset`, () => {
    const sunnaiGlassBowl01Preset =
      sunnaiGlassBowl01().build<TProductVariantDraft>();
    expect(sunnaiGlassBowl01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": [
              {
                "en-GB": "Round",
              },
            ],
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3739,
              "w": 5381,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_354085817-BK7aLsjs.jpeg",
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
              "centAmount": 799,
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
              "centAmount": 799,
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
              "centAmount": 799,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });

  it(`should return a sunnaiGlassBowl01 preset when built for graphql`, () => {
    const sunnaiGlassBowl01PresetGraphql =
      sunnaiGlassBowl01().buildGraphql<TProductVariantDraftGraphql>();
    expect(sunnaiGlassBowl01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "[{"en-GB":"Round"}]",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3739,
              "width": 5381,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_354085817-BK7aLsjs.jpeg",
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
                "centAmount": 799,
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
                "centAmount": 799,
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
                "centAmount": 799,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });
});
