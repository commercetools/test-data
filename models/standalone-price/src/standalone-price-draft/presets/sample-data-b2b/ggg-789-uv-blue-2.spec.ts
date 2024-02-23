import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue2 from './ggg-789-uv-blue-2';

describe(`with ggg789UvBlue2 preset`, () => {
  it(`should return a ggg789UvBlue2 preset`, () => {
    const ggg789UvBlue2Preset = ggg789UvBlue2().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-2",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvBlue2 preset when built for graphql`, () => {
    const ggg789UvBlue2PresetGraphql =
      ggg789UvBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-2",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
