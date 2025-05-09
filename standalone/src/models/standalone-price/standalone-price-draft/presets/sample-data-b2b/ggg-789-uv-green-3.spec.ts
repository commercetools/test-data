import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen3 from './ggg-789-uv-green-3';

describe(`with ggg789UvGreen3 preset`, () => {
  it(`should return a ggg789UvGreen3 preset`, () => {
    const ggg789UvGreen3Preset =
      ggg789UvGreen3().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-3",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11550000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen3 preset when built for graphql`, () => {
    const ggg789UvGreen3PresetGraphql =
      ggg789UvGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-3",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11550000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
