import type { TStandalonePriceDraft } from '../../../types';
import m890Op20194 from './m-890-op-2019-4';

describe(`with m890Op20194 preset`, () => {
  it(`should return a m890Op20194 preset`, () => {
    const m890Op20194Preset = m890Op20194().build<TStandalonePriceDraft>();
    expect(m890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-4",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20194 preset when built for graphql`, () => {
    const m890Op20194PresetGraphql =
      m890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-4",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
