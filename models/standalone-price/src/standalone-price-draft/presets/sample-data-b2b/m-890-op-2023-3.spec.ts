import type { TStandalonePriceDraft } from '../../../types';
import m890Op20233 from './m-890-op-2023-3';

describe(`with m890Op20233 preset`, () => {
  it(`should return a m890Op20233 preset`, () => {
    const m890Op20233Preset = m890Op20233().build<TStandalonePriceDraft>();
    expect(m890Op20233Preset).toMatchInlineSnapshot(`
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
        "key": "m890-op-2023-3",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20233 preset when built for graphql`, () => {
    const m890Op20233PresetGraphql =
      m890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "m890-op-2023-3",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
