import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed2 from './ggg-789-uv-red-2';

describe(`with ggg789UvRed2 preset`, () => {
  it(`should return a ggg789UvRed2 preset`, () => {
    const ggg789UvRed2Preset = ggg789UvRed2().build<TStandalonePriceDraft>();
    expect(ggg789UvRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-2",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7425000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed2 preset when built for graphql`, () => {
    const ggg789UvRed2PresetGraphql =
      ggg789UvRed2().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-2",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7425000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
