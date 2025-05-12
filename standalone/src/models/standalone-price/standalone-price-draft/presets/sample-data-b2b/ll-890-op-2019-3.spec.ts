import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20193 from './ll-890-op-2019-3';

describe(`with ll890Op20193 preset`, () => {
  it(`should return a ll890Op20193 preset`, () => {
    const ll890Op20193Preset = ll890Op20193().build<TStandalonePriceDraft>();
    expect(ll890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-3",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5005000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20193 preset when built for graphql`, () => {
    const ll890Op20193PresetGraphql =
      ll890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-3",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5005000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
