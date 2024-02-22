import type { TStandalonePriceDraft } from '../../../types';
import z890Op20233 from './z-890-op-2023-3';

describe(`with z890Op20233 preset`, () => {
  it(`should return a z890Op20233 preset`, () => {
    const z890Op20233Preset = z890Op20233().build<TStandalonePriceDraft>();
    expect(z890Op20233Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-3",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4158000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20233 preset when built for graphql`, () => {
    const z890Op20233PresetGraphql =
      z890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-3",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4158000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
