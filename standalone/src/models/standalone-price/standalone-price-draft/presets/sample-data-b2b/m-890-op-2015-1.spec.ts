import type { TStandalonePriceDraft } from '../../../types';
import m890Op20151 from './m-890-op-2015-1';

describe(`with m890Op20151 preset`, () => {
  it(`should return a m890Op20151 preset`, () => {
    const m890Op20151Preset = m890Op20151().build<TStandalonePriceDraft>();
    expect(m890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20151 preset when built for graphql`, () => {
    const m890Op20151PresetGraphql =
      m890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-1",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
