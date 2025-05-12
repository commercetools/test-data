import type { TStandalonePriceDraft } from '../../../types';
import z890Op20194 from './z-890-op-2019-4';

describe(`with z890Op20194 preset`, () => {
  it(`should return a z890Op20194 preset`, () => {
    const z890Op20194Preset = z890Op20194().build<TStandalonePriceDraft>();
    expect(z890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-4",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a z890Op20194 preset when built for graphql`, () => {
    const z890Op20194PresetGraphql =
      z890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-4",
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
