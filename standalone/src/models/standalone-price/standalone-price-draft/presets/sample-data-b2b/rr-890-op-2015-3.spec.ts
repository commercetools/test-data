import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20153 from './rr-890-op-2015-3';

describe(`with rr890Op20153 preset`, () => {
  it(`should return a rr890Op20153 preset`, () => {
    const rr890Op20153Preset = rr890Op20153().build<TStandalonePriceDraft>();
    expect(rr890Op20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-3",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20153 preset when built for graphql`, () => {
    const rr890Op20153PresetGraphql =
      rr890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-3",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
