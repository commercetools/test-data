import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen3 from './uu-789-uv-green-3';

describe(`with uu789UvGreen3 preset`, () => {
  it(`should return a uu789UvGreen3 preset`, () => {
    const uu789UvGreen3Preset = uu789UvGreen3().build<TStandalonePriceDraft>();
    expect(uu789UvGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-green-3",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen3 preset when built for graphql`, () => {
    const uu789UvGreen3PresetGraphql =
      uu789UvGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-green-3",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
