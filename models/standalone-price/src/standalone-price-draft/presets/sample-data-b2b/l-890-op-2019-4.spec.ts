import type { TStandalonePriceDraft } from '../../../types';
import l890Op20194 from './l-890-op-2019-4';

describe(`with l890Op20194 preset`, () => {
  it(`should return a l890Op20194 preset`, () => {
    const l890Op20194Preset = l890Op20194().build<TStandalonePriceDraft>();
    expect(l890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-4",
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a l890Op20194 preset when built for graphql`, () => {
    const l890Op20194PresetGraphql =
      l890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2019-4",
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
