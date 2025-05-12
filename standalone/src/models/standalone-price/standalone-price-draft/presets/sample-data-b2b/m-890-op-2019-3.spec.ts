import type { TStandalonePriceDraft } from '../../../types';
import m890Op20193 from './m-890-op-2019-3';

describe(`with m890Op20193 preset`, () => {
  it(`should return a m890Op20193 preset`, () => {
    const m890Op20193Preset = m890Op20193().build<TStandalonePriceDraft>();
    expect(m890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-3",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1573000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20193 preset when built for graphql`, () => {
    const m890Op20193PresetGraphql =
      m890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-3",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1573000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
