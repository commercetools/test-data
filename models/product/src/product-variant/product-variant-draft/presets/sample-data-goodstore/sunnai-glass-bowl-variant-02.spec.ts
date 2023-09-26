import type { TProductVariantDraft } from '../../../types';
import sunnaiGlassBowlVariant02 from './sunnai-glass-bowl-variant-02';
describe(`with sunnaiGlassBowlVariant02 preset`, () => {
  it('should return a sample sunnaiGlassBowlVariant02 product preset', () => {
    const sunnaiGlassBowlVariant02Preset =
      sunnaiGlassBowlVariant02().build<TProductVariantDraft>();
    expect(sunnaiGlassBowlVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": {
              "de-DE": "Deep",
              "en-GB": "Deep",
              "en-US": "Deep",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3288,
              "w": 4944,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_365013136-OKVQnVf-.jpeg",
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
              "centAmount": 899,
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
              "centAmount": 899,
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
              "centAmount": 899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SGB-02",
      }
    `);
  });
});
