import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20155 from './rr-890-op-2015-5';

describe(`with rr890Op20155 preset`, () => {
  it(`should return a rr890Op20155 preset`, () => {
    const rr890Op20155Preset = rr890Op20155().build<TStandalonePriceDraft>();
    expect(rr890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2015-5",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20155 preset when built for graphql`, () => {
    const rr890Op20155PresetGraphql =
      rr890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2015-5",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
