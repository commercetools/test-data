import type { TStandalonePriceDraft } from '../../../types';
import z890Op20152 from './z-890-op-2015-2';

describe(`with z890Op20152 preset`, () => {
  it(`should return a z890Op20152 preset`, () => {
    const z890Op20152Preset = z890Op20152().build<TStandalonePriceDraft>();
    expect(z890Op20152Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-2",
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2673000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20152 preset when built for graphql`, () => {
    const z890Op20152PresetGraphql =
      z890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-2",
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2673000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
