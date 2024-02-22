import type { TStandalonePriceDraft } from '../../../types';
import z890Op20154 from './z-890-op-2015-4';

describe(`with z890Op20154 preset`, () => {
  it(`should return a z890Op20154 preset`, () => {
    const z890Op20154Preset = z890Op20154().build<TStandalonePriceDraft>();
    expect(z890Op20154Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-4",
        "sku": "z890-op-2015",
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

  it(`should return a z890Op20154 preset when built for graphql`, () => {
    const z890Op20154PresetGraphql =
      z890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-4",
        "sku": "z890-op-2015",
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
