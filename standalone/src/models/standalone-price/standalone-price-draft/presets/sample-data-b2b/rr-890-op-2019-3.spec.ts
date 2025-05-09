import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20193 from './rr-890-op-2019-3';

describe(`with rr890Op20193 preset`, () => {
  it(`should return a rr890Op20193 preset`, () => {
    const rr890Op20193Preset = rr890Op20193().build<TStandalonePriceDraft>();
    expect(rr890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-3",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4290000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20193 preset when built for graphql`, () => {
    const rr890Op20193PresetGraphql =
      rr890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-3",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4290000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
