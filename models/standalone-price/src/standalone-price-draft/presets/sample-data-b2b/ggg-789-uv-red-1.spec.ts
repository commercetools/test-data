import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed1 from './ggg-789-uv-red-1';

describe(`with ggg789UvRed1 preset`, () => {
  it(`should return a ggg789UvRed1 preset`, () => {
    const ggg789UvRed1Preset = ggg789UvRed1().build<TStandalonePriceDraft>();
    expect(ggg789UvRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-1",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed1 preset when built for graphql`, () => {
    const ggg789UvRed1PresetGraphql =
      ggg789UvRed1().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-1",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
