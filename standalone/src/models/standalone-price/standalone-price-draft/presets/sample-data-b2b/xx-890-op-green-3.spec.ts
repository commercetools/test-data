import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen3 from './xx-890-op-green-3';

describe(`with xx890OpGreen3 preset`, () => {
  it(`should return a xx890OpGreen3 preset`, () => {
    const xx890OpGreen3Preset = xx890OpGreen3().build<TStandalonePriceDraft>();
    expect(xx890OpGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-3",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7700000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen3 preset when built for graphql`, () => {
    const xx890OpGreen3PresetGraphql =
      xx890OpGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-3",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7700000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
