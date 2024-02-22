import type { TStandalonePriceDraft } from '../../../types';
import m890Op20191 from './m-890-op-2019-1';

describe(`with m890Op20191 preset`, () => {
  it(`should return a m890Op20191 preset`, () => {
    const m890Op20191Preset = m890Op20191().build<TStandalonePriceDraft>();
    expect(m890Op20191Preset).toMatchInlineSnapshot(`
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
        "key": "m890-op-2019-1",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20191 preset when built for graphql`, () => {
    const m890Op20191PresetGraphql =
      m890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20191PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "m890-op-2019-1",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
