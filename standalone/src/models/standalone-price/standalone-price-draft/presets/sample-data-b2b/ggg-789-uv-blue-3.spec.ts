import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue3 from './ggg-789-uv-blue-3';

describe(`with ggg789UvBlue3 preset`, () => {
  it(`should return a ggg789UvBlue3 preset`, () => {
    const ggg789UvBlue3Preset = ggg789UvBlue3().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-3",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10725000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvBlue3 preset when built for graphql`, () => {
    const ggg789UvBlue3PresetGraphql =
      ggg789UvBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-3",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10725000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
