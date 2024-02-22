import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen1 from './ggg-789-uv-green-1';

describe(`with ggg789UvGreen1 preset`, () => {
  it(`should return a ggg789UvGreen1 preset`, () => {
    const ggg789UvGreen1Preset =
      ggg789UvGreen1().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-green-1",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen1 preset when built for graphql`, () => {
    const ggg789UvGreen1PresetGraphql =
      ggg789UvGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-green-1",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
