import type { TStandalonePriceDraft } from '../../../types';
import z890Op20155 from './z-890-op-2015-5';

describe(`with z890Op20155 preset`, () => {
  it(`should return a z890Op20155 preset`, () => {
    const z890Op20155Preset = z890Op20155().build<TStandalonePriceDraft>();
    expect(z890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-5",
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2430000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20155 preset when built for graphql`, () => {
    const z890Op20155PresetGraphql =
      z890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "z890-op-2015-5",
        "sku": "z890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2430000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
