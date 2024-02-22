import type { TStandalonePriceDraft } from '../../../types';
import m890Op20153 from './m-890-op-2015-3';

describe(`with m890Op20153 preset`, () => {
  it(`should return a m890Op20153 preset`, () => {
    const m890Op20153Preset = m890Op20153().build<TStandalonePriceDraft>();
    expect(m890Op20153Preset).toMatchInlineSnapshot(`
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
        "key": "m890-op-2015-3",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20153 preset when built for graphql`, () => {
    const m890Op20153PresetGraphql =
      m890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "m890-op-2015-3",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
