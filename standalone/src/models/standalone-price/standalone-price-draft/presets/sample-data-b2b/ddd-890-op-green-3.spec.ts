import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen3 from './ddd-890-op-green-3';

describe(`with ddd890OpGreen3 preset`, () => {
  it(`should return a ddd890OpGreen3 preset`, () => {
    const ddd890OpGreen3Preset =
      ddd890OpGreen3().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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

  it(`should return a ddd890OpGreen3 preset when built for graphql`, () => {
    const ddd890OpGreen3PresetGraphql =
      ddd890OpGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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
