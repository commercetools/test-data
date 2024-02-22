import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue1 from './ggg-789-uv-blue-1';

describe(`with ggg789UvBlue1 preset`, () => {
  it(`should return a ggg789UvBlue1 preset`, () => {
    const ggg789UvBlue1Preset = ggg789UvBlue1().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue1Preset).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-blue-1",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9075001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ggg789UvBlue1 preset when built for graphql`, () => {
    const ggg789UvBlue1PresetGraphql =
      ggg789UvBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-blue-1",
        "sku": "ggg789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9075001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
