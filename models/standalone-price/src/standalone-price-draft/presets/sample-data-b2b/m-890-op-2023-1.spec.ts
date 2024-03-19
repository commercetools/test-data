import type { TStandalonePriceDraft } from '../../../types';
import m890Op20231 from './m-890-op-2023-1';

describe(`with m890Op20231 preset`, () => {
  it(`should return a m890Op20231 preset`, () => {
    const m890Op20231Preset = m890Op20231().build<TStandalonePriceDraft>();
    expect(m890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-1",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20231 preset when built for graphql`, () => {
    const m890Op20231PresetGraphql =
      m890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-1",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
