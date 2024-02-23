import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20158 from './rr-890-op-2015-8';

describe(`with rr890Op20158 preset`, () => {
  it(`should return a rr890Op20158 preset`, () => {
    const rr890Op20158Preset = rr890Op20158().build<TStandalonePriceDraft>();
    expect(rr890Op20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-8",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20158 preset when built for graphql`, () => {
    const rr890Op20158PresetGraphql =
      rr890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-8",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
