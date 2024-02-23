import type { TStandalonePriceDraft } from '../../../types';
import z890Op20231 from './z-890-op-2023-1';

describe(`with z890Op20231 preset`, () => {
  it(`should return a z890Op20231 preset`, () => {
    const z890Op20231Preset = z890Op20231().build<TStandalonePriceDraft>();
    expect(z890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-1",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3564000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a z890Op20231 preset when built for graphql`, () => {
    const z890Op20231PresetGraphql =
      z890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-1",
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3564000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
