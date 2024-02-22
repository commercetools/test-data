import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed3 from './ggg-789-uv-red-3';

describe(`with ggg789UvRed3 preset`, () => {
  it(`should return a ggg789UvRed3 preset`, () => {
    const ggg789UvRed3Preset = ggg789UvRed3().build<TStandalonePriceDraft>();
    expect(ggg789UvRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-3",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed3 preset when built for graphql`, () => {
    const ggg789UvRed3PresetGraphql =
      ggg789UvRed3().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-3",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
