import type { TProductVariantDraft } from '../../../types';
import sunnaiGlassBowlVariant01 from './sunnai-glass-bowl-variant-01';
describe(`with sunnaiGlassBowlVariant01 preset`, () => {
  it('should return a sample sunnaiGlassBowlVariant01 product preset', () => {
    const sunnaiGlassBowlVariant01Preset =
      sunnaiGlassBowlVariant01().build<TProductVariantDraft>();
    expect(sunnaiGlassBowlVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "de-DE": "Round",
              "en-GB": "Round",
              "en-US": "Round",
            },
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
});
