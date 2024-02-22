import type { TStandalonePriceDraft } from '../../../types';
import z890Op20232 from './z-890-op-2023-2';

describe(`with z890Op20232 preset`, () => {
  it(`should return a z890Op20232 preset`, () => {
    const z890Op20232Preset = z890Op20232().build<TStandalonePriceDraft>();
    expect(z890Op20232Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-2",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3267001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20232 preset when built for graphql`, () => {
    const z890Op20232PresetGraphql =
      z890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2023-2",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3267001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
