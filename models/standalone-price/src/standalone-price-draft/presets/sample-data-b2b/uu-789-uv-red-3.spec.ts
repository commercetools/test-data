import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed3 from './uu-789-uv-red-3';

describe(`with uu789UvRed3 preset`, () => {
  it(`should return a uu789UvRed3 preset`, () => {
    const uu789UvRed3Preset = uu789UvRed3().build<TStandalonePriceDraft>();
    expect(uu789UvRed3Preset).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-red-3",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvRed3 preset when built for graphql`, () => {
    const uu789UvRed3PresetGraphql =
      uu789UvRed3().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-red-3",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
