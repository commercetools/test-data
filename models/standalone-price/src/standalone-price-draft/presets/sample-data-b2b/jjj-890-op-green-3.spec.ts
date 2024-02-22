import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen3 from './jjj-890-op-green-3';

describe(`with jjj890OpGreen3 preset`, () => {
  it(`should return a jjj890OpGreen3 preset`, () => {
    const jjj890OpGreen3Preset =
      jjj890OpGreen3().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-green-3",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13860000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen3 preset when built for graphql`, () => {
    const jjj890OpGreen3PresetGraphql =
      jjj890OpGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jjj890-op-green-3",
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13860000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
