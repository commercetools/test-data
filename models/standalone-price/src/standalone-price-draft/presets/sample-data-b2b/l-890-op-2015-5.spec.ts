import type { TStandalonePriceDraft } from '../../../types';
import l890Op20155 from './l-890-op-2015-5';

describe(`with l890Op20155 preset`, () => {
  it(`should return a l890Op20155 preset`, () => {
    const l890Op20155Preset = l890Op20155().build<TStandalonePriceDraft>();
    expect(l890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "l890-op-2015-5",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1350000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a l890Op20155 preset when built for graphql`, () => {
    const l890Op20155PresetGraphql =
      l890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "l890-op-2015-5",
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1350000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
