import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen7 from './ggg-789-uv-green-7';

describe(`with ggg789UvGreen7 preset`, () => {
  it(`should return a ggg789UvGreen7 preset`, () => {
    const ggg789UvGreen7Preset =
      ggg789UvGreen7().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-7",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen7 preset when built for graphql`, () => {
    const ggg789UvGreen7PresetGraphql =
      ggg789UvGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-7",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
