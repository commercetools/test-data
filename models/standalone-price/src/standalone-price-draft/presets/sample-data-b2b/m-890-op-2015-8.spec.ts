import type { TStandalonePriceDraft } from '../../../types';
import m890Op20158 from './m-890-op-2015-8';

describe(`with m890Op20158 preset`, () => {
  it(`should return a m890Op20158 preset`, () => {
    const m890Op20158Preset = m890Op20158().build<TStandalonePriceDraft>();
    expect(m890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-8",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20158 preset when built for graphql`, () => {
    const m890Op20158PresetGraphql =
      m890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-8",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
